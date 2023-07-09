import React from 'react';
import backg from './Images/backg.jpg'
import doc1 from './Images/doc1.jpg'
import doc3 from './Images/doc3.jpg'
import doc4 from './Images/doc4.jpg'
import doc7 from './Images/doc7.jpg'
import webpage from './Images/webpage.jpg'
import header from './Images/header-page.jpg'
// import BiFacebook  from 'bootstrap-icons';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Home.css'
class Home extends React.Component {
  render() {
    return (
      <><><><><>
   
       </>

<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb text-uppercase mb-0" >
              <li className="breadcrumb-item"><a className="text-white" href="/home">Home</a></li>
              
              <li className="breadcrumb-item text-primary active" aria-current="page"><a className="text-white" href="/">About</a></li>
            </ol>
          </nav>
        </div>
      </div>
            
            </>

            
            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex flex-column">
                                <img className="img-fluid rounded w-75 align-self-end" src={backg} alt="doc" />
                                <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src={webpage} alt="" style={{ marginTop: "-25%" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                           
                            <h1 className="mb-4">Why You Should Trust Us? Get to Know About Us!</h1>
                            <p>MediCo Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, MediCo Hospitals has touched more than 200 million lives from over 120 countries.</p>
                            <p>Quality health care</p>
                            <p>Only Qualified Doctors</p>
                            <p>Medical Research Professionals</p>
                            <a className="btn btn-dark rounded-pill py-3 px-5 mt-3" href="/Doctorreg">Doctor Registration</a><br/>
                            <a className="btn btn-dark rounded-pill py-3 px-5 mt-3" href="/patreg">Patient Registration</a>
                        </div>
                    </div>
                </div>
            </div></><div>
               


                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                            <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                            <h1>Our Experienced Doctors</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src={doc1} alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>SHAKUNTHALA</h5>
                                        <p className="text-primary">Cardiologist</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src={doc3} alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>MONISHA</h5>
                                        <p className="text-primary">Neurologist</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src={doc4} alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>RIYA</h5>
                                        <p className="text-primary">Orthologist</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src={doc7} alt="" />
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>RITHIKA</h5>
                                        <p className="text-primary">Pediatrician</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></><div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Services</h5>
                            <a className="btn btn-link" href="">Cardiology</a>
                            <a className="btn btn-link" href="">Pulmonary</a>
                            <a className="btn btn-link" href="">Neurology</a>
                            <a className="btn btn-link" href="">Orthopedics</a>
                            <a className="btn btn-link" href="">Laboratory</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms &amp; Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Any Queries..?</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text"  placeholder="Suggest" />
                                <button type="button"  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2" >Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Medico</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                               
                                Designed By <a className="border-bottom" href="">XYZ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>


      

      
    );
  }
}

export default Home;



