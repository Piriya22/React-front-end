import React ,{Component}from "react";
import { variables } from "./Variable";
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';
export class Doctorreg extends Component{
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
        };
      }
      
      componentDidMount() {
        this.fetchDoctor();
      }
      fetchDoctor() {
        axios.get(variables.API_URL + 'Doctor', {
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
      

      createItem = () => {
        const { doctor_Name, doctor_Specialisation, gender,doctor_Experience,password, doctor_Image } = this.state;
        const formData = new FormData();
        formData.append("doctor_Name", doctor_Name);
        formData.append("doctor_Specialisation", doctor_Specialisation);
        formData.append("gender", gender);
        formData.append("doctor_Experience", doctor_Experience);
        formData.append("password", password);
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
              throw new Error("Failed to create the Doctor. HTTP status " + response.status);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Doctor Created:", data);
            toast.success('Posted Successfully', {
              style: {
                background: '#87FC57',
                color: 'white'
              }
            }); 
            this.fetchDoctor();
            this.setState({
              doctor_Name: "",
              doctor_Specialisation: "",
              doctor_Experience: 0,
              gender:"",
              password:"",
              doctor_Image: null,
            });
          })
          .catch((error) => {
            console.error("Error Creating the Doctor:", error);
          });
      };

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
           
          } = this.state;
          return(
            <div className="container" style={{ backgroundColor: '#7d6970' }}>
      
          <div className="col-4 mx-auto">
          <div className="card" style={{backgroundImage: "url('https://media.istockphoto.com/id/1295677476/vector/electronic-patient-profile-or-online-medical-consulting.jpg?s=612x612&w=0&k=20&c=kW9i8p_48ZlvWI8bnr9lAcg0JwYuh_OdHHi7h6cXp9o=')",
  backgroundSize: 'cover',backgroundPosition: 'center',backgroundColor: '#eaf2f8', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body">
          <h5 className="card-title" style={{ color: 'black' }}>Create New Doctor</h5>
          <div className="form-group" style={{ color: 'black' }}>
            <label htmlFor="doctor_Name">Doctor Name:</label>
            <input
              type="text" 
              className="form-control"
              id="doctor_Name"
              value={doctor_Name}
              onChange={this.handledocInputChange}
            />
          </div>

          <div className="form-group" style={{ color: 'black' }}>
            <label htmlFor="doctor_Image">Doctor Image:</label>
            <input
              type="file"
              className="form-control"
              id="doctor_Image"
              onChange={this.handleimageInputChange}
            />
          </div>

          <div className="form-group" style={{ color: 'black' }}>
            <label htmlFor="doctor_Specialisation">doctor_Specialisation</label>
            <input
              type="text"
              className="form-control"
              id="doctor_Specialisation"
              value={doctor_Specialisation}
              onChange={this.handlespecInputChange}
            />
          </div>

          <div className="form-group" style={{ color: 'black' }}>
            <label htmlFor="gender">Doctor Gender:</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              value={gender}
              onChange={this.handlegenderInputChange}
            />
          </div>
          <div className="form-group" style={{ color: 'black' }}>
            <label htmlFor="doctor_Experience">Doctor Experience:</label>
            <input
              type="number"
              className="form-control"
              id="doctor_Experience"
              value={doctor_Experience}
              onChange={this.handleexperiInputChange}
            />
          </div>
          <div className="form-group" style={{ color: 'black' }}>
            <label htmlFor="password">Doctor Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={this.handlepassInputChange}
            />
          </div>
          <Link className="btn btn-primary"to={'/doctor'} style={{ backgroundColor: '#1976d2' }} onClick={this.createItem}>
            Create Doctor
          </Link>
        </div>
      </div>
      </div>
  </div>
          )
    }
}