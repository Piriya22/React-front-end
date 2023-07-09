import React, { useEffect, useState } from "react";
// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pic from './Images/pic.jpg'


function AdminPage() {

  const [activeSection, setActiveSection] = useState('content');
  const [doctors, setDoctors] = useState([]);
  const [notApprovedDoctors, setNotApprovedDoctors] = useState([]);

  useEffect(() => {
    fetchApprovedDoctors();
    fetchNotApprovedDoctors();

  }, []);


  const fetchApprovedDoctors=()=>{
    fetch('https://localhost:7145/api/Doctors/Accepted status')
      .then(response => response.json())
      .then(
        data => setDoctors(data),
        console.log(doctors))
      .catch(error => console.log(error));
  }

const fetchNotApprovedDoctors=()=>{
  fetch('https://localhost:7145/api/Doctors/Requested status')
      .then(response => response.json())
      .then(data => setNotApprovedDoctors(data))
      .catch(error => console.log(error));
  }

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem('token');
    navigate('/home');
  };

  return (
    <>
     <header className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#337ab7", color: "#fff" }}>
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <a href="/home" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0 text-warning" color="">Admin Page</h1>
                </a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-1 mb-lg-0 justify-content-center">
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleSectionClick('doctors')} style={{ color: "#fff", fontSize: "16px" }}>Not Approved</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleSectionClick('getDoctors')} style={{ color: "#fff", fontSize: "16px" }}>Active</a>
        </li>
        
      </ul>
   
      <div className="navbar">
      
      <button
        className="btn btn-danger"
        style={{ marginLeft: '10px' }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  
    </div>
  </div>
</header>


  
  
  
      {activeSection === 'content' && (
        <div className="content">
          <div className="context" 
          style={{
            backgroundImage: `url(${pic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backdropFilter: "blur(15px)",
            minHeight: "100vh",
            minWidth: "100%"
          }}>
            
           
          </div>
        </div>
      )}
  
      {activeSection === 'doctors' && (
        <div className="doctors">
          <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-doctors-container container" style={{
            backgroundImage: `url(${pic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backdropFilter: "blur(15px)",
            minHeight: "100vh",
            minWidth: "100%"
          }}>
              <div className="my-page-heading">
                <h2>Not Approved Doctor Details</h2>
                <hr />
              </div>
              <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {notApprovedDoctors.map(doctor => (
                    <div key={doctor.doctor_Id} className="col">
                      <div className="card my-bg-glass" style={{backgroundColor: "transparent",backdropFilter: 'blur(15px)', border: '2px solid rgba(255,255,255,0.5)'}}>
                        <div className="card-body" style={{color:"white"}}>
                        <img
                          src={`https://localhost:7145/uploads/${doctor.doctor_Image}`}
                          className="card-img-top"
                          alt=""
                          style={{ width: '200px', height: '200px' }}/>

                        <div className="flex flex-wrap">
                          <br/>
                        <span className="inline-block w-1/2">
                        <p className="text-sm text-gray-600">Name: {doctor.doctor_Name}</p>
                          {/* <p className="text-sm text-gray-600">Age: {doctor.doctor_Age}</p> */}
                          <p className="text-sm text-gray-600">Specialization: {doctor.doctor_Specialisation}</p>
                          <p className="text-sm text-gray-600">Gender: {doctor.gender}</p>
                          {/* <p className="text-sm text-gray-600">Email: {doctor.doctorEmail}</p> */}
                        </span>
                        <span className="inline-block w-1/2">
                          <p className="text-sm text-gray-600">Experience: {doctor.doctor_Experience} years</p>
                          {/* <p className="text-sm text-gray-600">Description: {doctor.description}</p> */}
                          {/* <p className="text-sm text-gray-600">Phone Number: {doctor.phoneNumber}</p> */}
                          <p className="text-sm text-gray-600">Status: {doctor.status}</p>
                        </span>
                      </div><hr/>
                          
                          <div className="d-flex justify-content-center">
                          
                            <button type="button" className="btn btn-success me-2" onClick={() =>{
                              const requestBody = {
                              "id": doctor.doctor_Id
                              };
                              console.log(requestBody);

                              
                              
                                fetch("https://localhost:7145/api/Doctors/Update status", {
                                  method: "PUT",
                                  headers: {
                                    "Accept": "application/json",
                                    "Content-Type": "application/json"
                                  },
                                  body: JSON.stringify(requestBody)
                                })
                                  .then(response => response.json())
                                  .then(data => {
                                    console.log(data); 
                                    fetchNotApprovedDoctors();
                                    fetchApprovedDoctors();
                                  })
                                  .catch(error => console.log(error));

                          }}>Accept</button>


                            <button type="button" className="btn btn-danger" onClick={() =>{
                              const requestBody = {
                                "id": doctor.doctor_Id
                              };
                              console.log(requestBody);

                              fetch("https://localhost:7145/api/Doctors/Decline Doctor", {
                              method: "PUT",
                              headers: {
                                  "Accept": "application/json",
                                  "Content-Type": "application/json"
                              },
                              body: JSON.stringify(requestBody)
                              })
                              .then(response => response.json())
                              .then(data => {
                              console.log(data); 
                              fetchNotApprovedDoctors();
                              fetchApprovedDoctors();
                              })
                              .catch(error => console.log(error));
                          }}>Decline</button>


                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>
      )}
  
      {activeSection === 'getDoctors' && (
        <div className="getDoctors">
          <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-doctors-container container" style={{
            backgroundImage: `url(${pic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backdropFilter: "blur(15px)",
            minHeight: "90vh",
            minWidth: "100%"
          }}>
              <div className="my-page-heading">
                <h2>Approved Doctor Details</h2>
                
                <hr />
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                  {doctors.map(doctor => (
                    <div key={doctor.doctor_Id} className="col">
                    
                      <div className="card my-bg-glass">
                      <br/>
                      <img
                  src={`https://localhost:7145/uploads/${doctor.doctor_Image}`}
                  className="card-img-top rounded-circle"
                  alt=""
                  style={{
                    width: '200px',
                    height: '200px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />

                <div className="card-body">
            <h5 className="card-title">{doctor.doctor_Name}</h5>
            <div className="flex flex-wrap">
              <span className="inline-block w-1/2">
                {/* <p className="text-sm text-gray-600">Age: {doctor.doctorAge}</p> */}
                <p className="text-sm text-gray-600">Specialization: {doctor.doctor_Specialisation}</p>
                <p className="text-sm text-gray-600">Gender: {doctor.Gender}</p>
                {/* <p className="text-sm text-gray-600">Email: {doctor.doctorEmail}</p> */}
              </span>
              <span className="inline-block w-1/2">
                <p className="text-sm text-gray-600">Experience: {doctor.doctor_Experience} years</p>
                {/* <p className="text-sm text-gray-600">Description: {doctor.description}</p> */}
                {/* <p className="text-sm text-gray-600">Phone Number: {doctor.phoneNumber}</p> */}
                <p className="text-sm text-gray-600">Status: {doctor.status}</p>
              </span>
            </div>
          </div>
        </div>
      </div>   
  ))}
</div>
            </div>
          </section>
        </div>
      )}
    </>
  );  
}

export default AdminPage;