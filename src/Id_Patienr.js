import React, { Component } from "react";
import axios from "axios";
import { variables } from "./Variable";
import lady from './Images/pat.jpg'

class PatientById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient_Id: "",
      patient: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchPatientById();
  }

  fetchPatientById = () => {
    const id = localStorage.getItem("patient_Id");

    axios
      .get(`${variables.API_URL}Patients/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const patient = response.data;
        this.setState({ patient });
      })
      .catch((error) => {
        console.error("Error fetching patient by ID:", error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { patient_Id } = this.state;
    localStorage.setItem("patient_Id", patient_Id);
    this.fetchPatientById(patient_Id);
  };

  handleInputChange = (event) => {
    this.setState({ patient_Id: event.target.value });
  };

  render() {
    const { patient } = this.state;

    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ backgroundImage:`url(${lady})` ,backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight:'100vh', minWidth:'100%', border: '2px solid rgba(255,255,255,0.5)' }}>
        <div className="card card-sm" style={{ width: '500px', backdropFilter: 'blur(15px)', backgroundColor: "transparent", marginTop: '40px' }}>
          <div className="card-body" style={{backdropFilter:'blur(15px)',backgroundColor:"transparent"}}>
            <h2 className="card-title">Patient Details</h2>

            {patient ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Treatment</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{patient.patient_Name}</td>
                    <td>{patient.patient_Age}</td>
                    <td>{patient.medical_Treatment}</td>
                    <td>{patient.gender}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>Loading patient details...</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PatientById;
