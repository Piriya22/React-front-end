import React, { Component } from "react";
import axios from "axios";
import { variables } from "./Variable";

class PatientById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: null,
      error: null,
    };
  }

  componentDidMount() {
   
      this.fetchPatientById();
    }
  

  fetchPatientById = () => {
    const doctorid = localStorage.getItem("doctor_Id");

    axios
      .get(`${variables.API_URL}Doctors/${doctorid}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const doctors = response.data;
        this.setState({ doctors });
      })
      .catch((error) => {
        console.error("Error fetching doctor by ID:", error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { doctor_Id } = this.state;
    localStorage.setItem("doctor_Id", doctor_Id);
    this.fetchPatientById(doctor_Id);
  };

  handleInputChange = (event) => {
    this.setState({ doctor_Id: event.target.value });
  };

  render() {
    const { doctors } = this.state;

    return (
        <div className="container">
        <h2>patient Details</h2>

        {doctors ? (
          <table className="table">
            <thead>
              <tr>
                <th>patient Name</th>
                <th>Age</th>
                <th>Treatment</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{doctors.doctor_Name}</td>
                <td>{doctors.doctor_Specialisation}</td>
                <td>{doctors.doctor_Experience}</td>
                <td>{doctors.gender}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading patient details...</p>
        )}
      </div>
    );
  }
}

export default PatientById;