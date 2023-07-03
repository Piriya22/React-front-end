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

function App() {
  return (
<div>
    <ToastContainer theme='colored'></ToastContainer>
    <BrowserRouter>

    <nav class="navbar navbar-expand-lg "style={{ backgroundColor: '#c107ff', color: '#131313' }} >
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/doctor">Doctor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/patient">Patient</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/PageAdmin">Adminpage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Doctorreg">Doctor Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>

        
      </ul>
      <span class="navbar-text">
        <a class="nav-link" onClick={()=>{localStorage.removeItem("token")}}>Logout</a>
      </span>

      
    </div>
  </div>
</nav>

 <Routes>

  <Route path='/doctor' Component={Doctor}/>
  <Route path='/patient' Component={Patient}/>
  <Route path='/Login' Component={Login}/>
  <Route path='/admin' Component={Admin}/>
  <Route path='/PageAdmin' Component={PageAdmin}/>
  <Route path='/Doctorreg' Component={Doctorreg}/>

 
 </Routes>
 </BrowserRouter>
     </div>
  );
}

export default App;
