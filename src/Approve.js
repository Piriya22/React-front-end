import React, { useEffect, useState } from "react";
import loginimg from './Images/imgb.jpg'

function Approveddoc() {
   
      const [activeSection, setActiveSection] = useState('content');
      const [doctors, setDoctors] = useState([]);
    
      useEffect(() => {
        fetchApprovedDoctors();
      }, []);
    
    
      const fetchApprovedDoctors=()=>{
        fetch('https://localhost:7145/api/Doctors/Accepted status', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(response => response.json())
          .then(
            data => setDoctors(data),
            console.log(doctors))
          .catch(error => console.log(error));
      }
    
   
      const handleSectionClick = (section) => {
        setActiveSection(section);
      };
    
      return (
        <div>
       
<div  style={{ backgroundImage: `url(${loginimg})`, backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight:'80vh', minWidth:'80%', border: '2px solid rgba(255,255,255,0.5)'}}>
         <header className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "grey", color: "#fff" }}>
        <div className="container-fluid" >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0 justify-content-center" >

            <li className="nav-item">
              <a className="nav-link" onClick={() => handleSectionClick('getDoctors')} style={{ color: "#fff", fontSize: "16px" }}>Activated Doctors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/patreg" style={{ color: "#fff", fontSize: "16px" }}>Registration </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/doctor" style={{ color: "#fff", fontSize: "16px" }}>Doctors </a>
            </li>
            
           
          </ul>
        </div>
      </div>
    </header>
    
    
      
      
      
       
      
         
          {activeSection === 'getDoctors' && (
            <div className="getDoctors" >
              <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-doctors-container container" >
              <div className="my-page-heading" >
                    <h2>Activated Doctors</h2>
                    
                    <hr />
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 g-4" style={{backdropFilter: 'blur(15px)', backgroundColor: "transparent"}} >
                      {doctors.map(doctor => (
                        <div key={doctor.doctor_Id} className="col">
                        <div className="card my-bg-glass my-card-hover">
                        <div className="card-body" >
                          <br/>
                          <img
                      src={`https://localhost:7145/uploads/${doctor.doctor_Image}`}
                      className="card-img-top "
                      alt=""
                      style={{
                        width: '200px',
                        height: '200px',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
    
                    <div className="card-body" >
                <h5 className="card-title">{doctor.doctor_Name}</h5>
                <div className="flex flex-wrap">
                  <span className="inline-block w-1/2">
                    <p className="text-sm text-gray-600">Specialization: {doctor.doctor_Specialisation}</p>
                    <p className="text-sm text-gray-600">Gender: {doctor.gender}</p>
                  </span>
                  <span className="inline-block w-1/2">
                    <p className="text-sm text-gray-600">Experience: {doctor.doctor_Experience} years</p>
                    <p className="text-sm text-gray-600">Doctor id: {doctor.doctor_Id}</p>
                    <p className="text-sm text-gray-600">Status: {doctor.status}</p>
                  </span>
                </div>
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
          </div>
          </div>
      ); 
                    }
                

export default Approveddoc;