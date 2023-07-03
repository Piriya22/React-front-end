import React, { Component } from "react";
import axios from "axios";

class Patient extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      patient_Id: 0,
      doctor_Id: 0,
      doctors: null,
      patient_Name: "",
      patient_Age: 0,
      gender: "",
      medical_Treatment: "",
      phone_Number: "",
      patient_Address: "",
      user_name: "",
      user_password: ""

    };
  }

  componentDidMount() {
    this.fetchPatients();
  }

  fetchPatients() {
    axios
      .get("https://localhost:7145/api/Patients", {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then((response) => {
        const patients = response.data;
        this.setState({ patients});
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createPatient = () => {
    const {
      doctor_Id,
      patient_Name,
      patient_Age,
      gender,
      medical_Treatment,
      phone_Number,    
      patient_Address,
      user_name,
      user_password
    } = this.state;

    const patient = {
      doctor_Id,
      patient_Name,
      patient_Age,
      gender,
      medical_Treatment,
      phone_Number,
      patient_Address,
      user_name,
      user_password
    
    };
   

    axios
      .post("https://localhost:7145/api/Patients",patient, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then((response) => {
        console.log("Patient created:", response.data);
        this.fetchPatients();
        this.resetForm();
      })
      .catch((error) => {
        console.error("Error creating patient:", error);
      });
  };

  updatePatient = () => {
    const {
      patient_Id,
      doctor_Id,
      patient_Name,
      patient_Age,
      gender,
      medical_Treatment,
      phone_Number,
      patient_Address,
      user_name,
      user_password
     
    } = this.state;

    const patient = {
      doctor_Id,
      patient_Id,
      patient_Name,
      patient_Age,
      gender,
      medical_Treatment,
      phone_Number,
      patient_Address,
      user_name,
      user_password
   
    };


    axios
      .put(`https://localhost:7145/api/Patients/${patient_Id}`, patient, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then((response) => {
        console.log("Patient updated:", response.data);
        this.fetchPatients();
        this.resetForm();
      })
      .catch((error) => {
        console.error("Error updating patient:", error);
      });
  };

  deletePatient = (patient_Id) => {
    axios
      .delete(`https://localhost:7145/api/Patients/${patient_Id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then((response) => {
        console.log("Patient deleted:", response.data);
        this.fetchPatients();
      })
      .catch((error) => {
        console.error("Error deleting patient:", error);
      });
  };

  resetForm = () => {
    this.setState({
      patient_Id: 0,
      doctor_Id: 0,
      doctor: null,
      patient_Name: "",
      patient_Age: 0,
      gender: "",
      medical_Treatment:"",
      phone_Number: "", 
      patient_Address: "",
      user_name: "",
      user_password: ""
      
    });
  };

  render() {
    const {
      patients,
      patient_Id,
      doctor_Id,
      patient_Name,
      patient_Age,
      gender,
      medical_Treatment,
      phone_Number,
      patient_Address,
      user_name,
      user_password
    
    } = this.state;


return (
  <div className="container">
    <h2>Patients</h2>

    <div>
      <h3>Add/Edit Patient</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="doctor_Id" className="form-label">
            Doctor ID
          </label>
          <input
            type="text"
            className="form-control"
            id="doctor_Id"
            name="doctor_Id"
            value={doctor_Id}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="doctor_Id" className="form-label">
          Patient Name
          </label>
          <input
            type="text"
            className="form-control"
            id="patient_Name"
            name="patient_Name"
            value={patient_Name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="patient_Age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="patient_Age"
            name="patient_Age"
            value={patient_Age}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
          gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            value={gender}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="medical_Treatment" className="form-label">
          Health Issue
          </label>
          <input
            type="text"
            className="form-control"
            id="medical_Treatment"
            name="medical_Treatment"
            value={medical_Treatment}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone_Number" className="form-label">
          phone number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone_Number"
            name="phone_Number"
            value={phone_Number}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="patient_Address" className="form-label">
         patient_Address
          </label>
          <input
            type="text"
            className="form-control"
            id="patient_Address"
            name="patient_Address"
            value={patient_Address}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">
      User name
          </label>
          <input
            type="text"
            className="form-control"
            id="user_name"
            name="user_name"
            value={user_name}
            onChange={this.handleInputChange}
          />
        </div>
         <div className="mb-3">
          <label htmlFor="user_password" className="form-label">
      User password
          </label>
          <input
            type="text"
            className="form-control"
            id="user_password"
            name="user_password"
            value={user_password}
            onChange={this.handleInputChange}
          />
        </div>

        {patient_Id === 0 ? (
          <button type="button" className="btn btn-primary" onClick={this.createPatient}>
            Add Patient
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={this.updatePatient}>
            Update Patient
          </button>
        )}

        <button type="button" className="btn btn-secondary" onClick={this.resetForm}>
          Cancel
        </button>
      </form>
    </div>

    <div>
      <h3>Patients List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Patient Id</th>
            <th>Patient Name</th>
            <th>Patient Age</th>
            <th>Gender</th>
            <th>Patient Issue</th>
            <th>Phone Number</th>
            <th>Patient patient_Address</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patient_Id}>
              <td>{patient.patient_Id}</td>
              <td>{patient.patient_Name}</td>
              <td>{patient.patient_Age}</td>
              <td>{patient.gender}</td>
              <td>{patient.medical_Treatment}</td>
              <td>{patient.phone_Number}</td>
              <td>{patient.patient_Address}</td>
              <td>{patient.user_name}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.deletePatient(patient.patient_Id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.setState(patient)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}
}

export default Patient;