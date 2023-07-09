import React, { Component } from "react";
import { variables } from "./Variable";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from 'axios';
import gra from './Images/lady.jpg'
export class Doctor extends Component{
    constructor(props) {
        super(props);
        this.state = {
          Doctor: [],
          doctor_Name: "",
          doctor_Image: "",
          doctor_Specialisation: "",
          gender: "",
          doctor_Experience:0,
          password:"",
          status:null,
          doctor_Id: null,
          doc_password:""
        };
      }
      componentDidMount() {
        this.fetchDoctor();
      }
      fetchDoctor() {
        axios.get(variables.API_URL + 'Doctors', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
          .then((response) => {
            const data = response.data;
            const Doctor = data.map((Doctor) => {
              const { Patient, ...rest } = Doctor;
              return { ...rest, Patient };
            });
      
            this.setState({ Doctor });
          })
          .catch((error) => {
            console.error('Error fetching Doctors:', error);
          });
      }
      handledocInputChange= (event) => {
        this.setState({ doctor_Name: event.target.value });
      };
      handleimageInputChange= (event) => {
        const file = event.target.files[0]; 
        this.setState({ doctor_Image: file });
      };
      handlespecInputChange= (event) => {
        this.setState({ doctor_Specialisation: event.target.value });
      };
      handlegenderInputChange= (event) => {
        this.setState({ gender: event.target.value });
      };
      handleexperiInputChange=(event) => {
        this.setState({ doctor_Experience: event.target.value });
      };
      handlepassInputChange=(event) => {
        this.setState({ password: event.target.value });
      };
      handlestatusInputChange=(event) => {
        this.setState({ status: event.target.value });
      };
      handledocImageeditInputChange= (event) => {
        const file = event.target.files[0]; // Get the first file from the input
        this.setState({ doctor_Image: file });
      };
      handledocpassInputChange=(event) => {
        this.setState({password : event.target.value });
      };
      handledocexperiInputChange=(event) => {
        this.setState({doctor_Experience : event.target.value });
      };
      handledocgenInputChange=(event) => {
        this.setState({gender : event.target.value });
      };
      handledocspecInputChange=(event) => {
        this.setState({doctor_Specialisation : event.target.value });
      };
      handledocnameInputChange=(event) => {
        this.setState({doctor_Name : event.target.value });
      };
      handledocIdInputChange=(event) => {
        this.setState({doctor_Id : event.target.value });
      };
      handledocpasswordChange=(event) => {
        this.setState({doctor_password : event.target.value });
      };

      createItem = () => {
        const { doctor_Name, doctor_Specialisation, gender,doctor_Experience,password, doctor_Image,doc_password } = this.state;
        const formData = new FormData();
        formData.append("doctor_Name", doctor_Name);
        formData.append("doctor_Specialisation", doctor_Specialisation);
        formData.append("gender", gender);
        formData.append("doctor_Experience", doctor_Experience);
        formData.append("password", password);
        formData.append("doc_password", doc_password);
        formData.append("imageFile", doctor_Image);
      
        fetch("https://localhost:7145/api/Doctors", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to create the cake. HTTP status " + response.status);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Doctor Created:", data);
            this.fetchDoctor();
            this.setState({
              doctor_Name: "",
              doctor_Specialisation: "",
              doctor_Experience: 0,
              gender:"",
              password:"",
              doctor_Image: null,
              doc_password:""
            });
          })
          .catch((error) => {
            console.error("Error Creating the Doctor:", error);
          });
      };
      editItem = () => {
        const { doctor_Id,doctor_Name, doctor_Specialisation, gender,doctor_Experience,password, doctor_Image,doc_password  } = this.state;
      
        const formData = new FormData();
        formData.append('doctor_Id', doctor_Id);
        formData.append('doctor_Name', doctor_Name);
        formData.append('doc', 'doctor value'); 
        formData.append('doctor_Specialisation', doctor_Specialisation);
        formData.append('gender', gender);
        formData.append('doctor_Experience', doctor_Experience);
        formData.append('password', password);
        formData.append('imageFile', doctor_Image);
        formData.append('doc_password', doc_password);
      
        axios.put(variables.API_URL + `Doctors/${doctor_Id}`, formData, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((response) => response.data)
          .then((data) => {
            console.log('Doctor Updated:', data);
            this.fetchDoctor();
            this.setState({
              doctor_Id: 0,
              doctor_Name: '',
              doctor_Specialisation: '',
              gender: "",
              doctor_Experience:0,
              password:"",
              doctor_Image: null,
              doc_password:""
            });
      
            const imageElement = document.getElementById('doctor_Image');
            if (imageElement) {
              imageElement.src = data.doctor_Image;
            }
          })
          .catch((error) => {
            console.error('Error Updating the Doctor:', error);
          });
      };
      deleteItem = (doctor_Id) => {
        fetch(variables.API_URL + `Doctors/${doctor_Id}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Doctor Deleted:", data);
            this.fetchDoctor();
          })
          .catch((error) => {
            console.error("Error Deleting the Doctor:", error);
          });
      };
    
    render(){
        const {
            Doctor,
            doctor_Image,
            doctor_Name,
            doctor_Specialisation,
            gender,
            doctor_Experience,
            password,
            status,
            doctor_Id,
            doctor_password
           
          } = this.state;
      
        return(
       

<div className="container" style={{ backgroundImage: `url(${gra})`, backgroundSize: 'cover', backgroundPosition: 'fixed', backgroundRepeat: 'no-repeat', minHeight: '100vh', minWidth: '100%', backdropFilter: 'blur(15px)', border: '2px solid rgba(255,255,255,0.5)' }}>

              
              <h1 className="mb-4 text-center" style={{ color: 'black' }}><br/>List Of Doctors</h1><br/>


<div className="row" >
  {Doctor.map((doc) => (
    <div className="col-md-4 mb-4" key={doc.doctor_Id}>
      <div className="card card-small" style={{backgroundColor: "transparent",backdropFilter: 'blur(15px)', border: '2px solid rgba(255,255,255,0.5)'}}>
      <img
  src={`https://localhost:7145/uploads/${doc.doctor_Image}`}
  className="card-img-top doctor-image"
  alt={doc.doctor_Name}
/>
        <div className="card-body" style={{color: 'black', justifyContent: 'center', alignItems: 'center' }}>
          <h2 className="card-title">{doc.doctor_Name}</h2>
          <p className="card-text">SPECIALISATION: {doc.doctor_Specialisation}</p>
          <p className="card-text">GENDER: {doc.gender}</p>
          <p className="card-text">EXPERIENCE: {doc.doctor_Experience}</p>
          <div className="btn-group" role="group" >
          <td> <button type="button"
                className="btn btn"
                onClick={() =>
                  this.setState({doctor_Id: doc.doctor_Id, doctor_Name: doc.doctor_Name,doctor_Image:doc.doctor_Image,doctor_Specialisation:doc.doctor_Specialisation,doctor_Experience:doc.doctor_Experience,gender:doc.gender })
                }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg> </button> </td>
            <td><button type="button"
                className="btn btn" onClick={() => this.deleteItem(doc.doctor_Id)}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg></button></td>
          </div>

        </div>
      </div>
    </div>
  ))}
</div>
<div className="card card-sm mx-auto" style={{ maxWidth: '500px', backdropFilter: 'blur(15px)', backgroundColor: 'transparent', marginTop: '100px' }}>
        <div className="card-body" style={{color:"white"}}>
          <h5 className="card-title">Edit Doctor</h5>
          <div className="form-group">
            <label htmlFor="doctor_Id">Doctor Id:</label>
            <input
              type="text"
              className="form-control"
              id="doctor_Id"
              value={doctor_Id}
              onChange={this.handledocIdInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="doctor_Name">Doctor Name:</label>
            <input
              type="text"
              className="form-control"
              id="doctor_Name"
              value={doctor_Name}
              onChange={this.handledocnameInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="doctor_Specialisation">Doctor Specialisation:</label>
            <input
              type="text"
              className="form-control"
              id="doctor_Specialisation"
              value={doctor_Specialisation}
              onChange={this.handledocspecInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Doctor Gender:</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              value={gender}
              onChange={this.handledocgenInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="doctor_Experience">Doctor Experience:</label>
            <input
              type="number"
              className="form-control"
              id="doctor_Experience"
              value={doctor_Experience}
              onChange={this.handledocexperiInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Doctor Password:</label>
            <input
              type="text"
              className="form-control"
              id="password"
              value={password}
              onChange={this.handledocpassInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="doctor_Image">Doctor Image:</label>
            <input
              type="file"
              className="form-control"
              id="doctor_Image"
              onChange={this.handledocImageeditInputChange}
            />
          </div><br/>

          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <button className="btn btn-primary" onClick={this.editItem}>
    Update Doctor
  </button>
</div>

        </div>
      </div>
</div>

        )
    }
}