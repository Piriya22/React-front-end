import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import cartoon from "./Images/imgb.jpg";

class Patientreg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      Doctor: [],
      patient_Id: 0,
      doctor_Id: 0,
      doctor: null,
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
    this.fetchDoctor();
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
      .post("https://localhost:7145/api/Patients", patient)
      .then((response) => {
        console.log("Patient created:", response.data);
        this.fetchPatients();
        this.resetForm();
      })
      .catch((error) => {
        console.error("Error creating patient:", error);
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
      medical_Treatment: "",
      phone_Number: "",
      patient_Address: "",
      user_name: "",
      user_password: ""
    });
  };

  fetchDoctor() {
    axios
      .get("https://localhost:7145/api/Doctors/Accepted status")
      .then((response) => {
        const data = response.data;
        const Doctor = data.map((Doctor) => {
          const { Patient, ...rest } = Doctor;
          return { ...rest, Patient };
        });

        this.setState({ Doctor });
      })
      .catch((error) => {
        console.error("Error fetching Doctors:", error);
      });
  }

  render() {
    const {
      patients,
      patient_Id,
      doctor_Id,
      doctor,
      patient_Name,
      patient_Age,
      gender,
      medical_Treatment,
      phone_Number,
      patient_Address,
      user_name,
      user_password
    } = this.state;
    const { Doctor } = this.state;

    return (
      <><div>
        <br></br>
        <div
          style={{
            backgroundImage: `url(${cartoon})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backdropFilter: "blur(15px)",
            minHeight: "100vh",
            minWidth: "100%"
          }}
        >
          <div className="container" >
            <div className="card card-sm" style={{ maxWidth: "600px", marginBottom: "20px", backgroundColor: "transparent", backdropFilter: 'blur(15px)' }}>
              <div className="card-body" >
                <h2>PATIENTS REGISTRATION</h2>

                <div>
                  <h5 style={{ color: "blue" }}>Add/Edit Patient</h5><br/>
                  

                  <form>
                    <div className="card" style={{ backdropFilter: '(15px)', backgroundColor: "transparent" }}>
                      <div className="card-body">
                        <div className="mb-3">
                          <label htmlFor="doctor_Id" className="form-label">
                            Doctor
                          </label>
                          <select
                            className="form-control"
                            id="doctor_Id"
                            name="doctor_Id"
                            value={doctor_Id}
                            onChange={this.handleInputChange}
                          >
                            <option value="">Select Doctor</option>
                            {Doctor.map((doctor) => (
                              <option key={doctor.doctor_Id} value={doctor.doctor_Id}>
                                {doctor.doctor_Id} - {doctor.doctor_Name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="patient_Name" className="form-label">
                            Patient Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="patient_Name"
                            name="patient_Name"
                            value={patient_Name}
                            onChange={this.handleInputChange} />
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
                            onChange={this.handleInputChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="gender" className="form-label">
                            Gender
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={this.handleInputChange} />
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
                            onChange={this.handleInputChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone_Number" className="form-label">
                            Phone number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone_Number"
                            name="phone_Number"
                            value={phone_Number}
                            onChange={this.handleInputChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="patient_Address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="patient_Address"
                            name="patient_Address"
                            value={patient_Address}
                            onChange={this.handleInputChange} />
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
                            onChange={this.handleInputChange} />
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
                            onChange={this.handleInputChange} />
                        </div>

                        {patient_Id === 0 ? (
                          <Link type="button" className="btn btn-warning" onClick={this.createPatient} to={"/Login"}style={{ marginLeft: "100px" }}>
                            Register
                          </Link>
                        ) : (
                          <button type="button" className="btn btn-warning" onClick={this.updatePatient} >
                            Update Patient
                          </button>
                        )}

                        <button type="button" className="btn btn-danger" onClick={this.resetForm}style={{ marginLeft: "100px" }}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div><div
        className="card card-sm"
        style={{ position: "absolute", bottom: "300px", right: "20px", maxWidth: "200px", backgroundColor: "pink", backdropFilter: 'blur(15px)' }}
      >
          <div className="card-body">
            <h5><b>Active Doctors</b></h5>
            <p>Go find your doctors</p>
            <Link type="button" className="btn btn-success" to="/Approve">
                    Find doctors
                  </Link>
          </div>
        </div></>
   
    );
  }
}

export default Patientreg;
