import './App.css';
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './Login';
import {Doctor} from './Doctor';
import Patient from './Patient';
import Admin from './Admin';
import PageAdmin from './PageAdmin';
import { Doctorreg } from './RegisterDoctor';
import Home from './Home';
import Ipat from './Id_Patienr';
import Idoc from './Id_Doc';
import patreg from './Patient_Register'
import Approve from './Approve';

function App() {
  return (
<div>
    <ToastContainer theme='colored'></ToastContainer>
    <BrowserRouter>


<nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
                <a href="/home" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0 text-primary"><i className="far fa-hospital me-3"></i>MediCo</h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/home" className="nav-item nav-link">Home</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                                <a href="/home" className="dropdown-item">Home</a>
                                <a href="/" className="dropdown-item">About</a>
                                <a href="/Login" className="dropdown-item">Login</a>
                                <a href="/patreg" className="dropdown-item">Patient Register</a>
                                <a href="/Doctorreg" className="dropdown-item">Doctor Register</a>
                            </div>
                           
                        </div>
                        <a href="/Login" className="nav-item nav-link">Login</a>
                    </div>
                    <a href="/PageAdmin" className="btn btn-primary mb1 bg-teal rounded-0 py-4 px-lg-5 d-none d-lg-block">ADMIN LOGIN</a>
                    
                    
                </div>
            </nav>

 <Routes>
 <Route path='/home' Component={Home}/>

  <Route path='/doctor' Component={Doctor}/>
  <Route path='/patient' Component={Patient}/>
  <Route path='/Login' Component={Login}/>
  <Route path='/admin' Component={Admin}/>
  <Route path='/PageAdmin' Component={PageAdmin}/>
  <Route path='/Doctorreg' Component={Doctorreg}/>
  <Route path='/Idoc' Component={Idoc}/>
  <Route path='/Ipat' Component={Ipat}/>
  <Route path='/patreg' Component={patreg}/>
  <Route path='/Approve' Component={Approve}/>
  
 

 
 </Routes>
 </BrowserRouter>
     </div>
  );
}

export default App;
