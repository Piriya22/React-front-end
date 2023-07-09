import React ,{Component}from "react";
import { variables } from "./Variable";
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import group from './Images/group.jpg';

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
          doc_name:"",
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
      

      createItem = () => {
        const { doctor_Name, doctor_Specialisation, gender,doctor_Experience,password, doctor_Image,doc_name,doc_password } = this.state;
        const formData = new FormData();
        formData.append("doctor_Name", doctor_Name);
        formData.append("doctor_Specialisation", doctor_Specialisation);
        formData.append("gender", gender);
        formData.append("doctor_Experience", doctor_Experience);
        formData.append("password", password);
        formData.append("doc_name", doc_name);
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
              doc_name:"",
              doc_password:""
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
      handledocpassInputChange=(event) => {
        this.setState({ doc_password: event.target.value });
      };
      handledocnameInputChange=(event) => {
        this.setState({ doc_name: event.target.value });
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
            doc_name,
            doc_password
           
          } = this.state;
          return(
            <div className="container" style={{
              backgroundImage: `url(${group})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backdropFilter: "blur(15px)",
              minHeight: "100vh",
              minWidth: "100%"
            }}>
      
          <div className="col-4 mx-auto">
          <div className="card" style={{ maxWidth: "600px", marginBottom: "20px", backgroundColor: "transparent", backdropFilter: 'blur(15px)' }}>
        <div className="card-body">
          <h5 className="card-title" style={{ color: 'black' }}>DOCTOR'S REGISTRATION</h5>
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
            <label htmlFor="doctor_Specialisation">Doctor Specialisation</label>
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
          <div className="form-group" style={{ color: 'black' }}>
            <label htmlFor="password">Doctor name:</label>
            <input
              type="doc_name"
              className="form-control"
              id="doc_name"
              value={doc_name}
              onChange={this.handledocnameInputChange}
            />
          </div>
          <div className="form-group" style={{ color: 'black' }}>
            <label htmlFor="password">Doctor Password:</label>
            <input
              type="doc_password"
              className="form-control"
              id="doc_password"
              value={doc_password}
              onChange={this.handledocpassInputChange}
            />
          </div><br/>
          
          <Link className="btn btn-primary"to={'/Login'} style={{ backgroundColor: '#1976d2' }} onClick={this.createItem}>
            REGISTER
          </Link>
        </div>
      </div>
      </div>
  </div>
          )
    }
}