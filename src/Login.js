import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginimg from './Images/cartoon.jpg'

export default function Login() {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('user'); // Default role is "user"

  const navigate = useNavigate();

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();

    const apiUrl = role === 'user' ? 'https://localhost:7145/api/Token/Patients' : 'https://localhost:7145/api/Token/Doctors';

    const inputObj = {
      patient_Name: userName,
      password: password,
    };

    const inputObj2 = {
      doc_name: userName,
      doc_password: password,
    };

    const input = role === 'user' ? inputObj : inputObj2;
    if (role !== 'user') {
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      })
      .then((res) => {
        if (res.ok) {
          return res.json(); // Return the response as JSON
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .then((data) => {
        if (data !== 'Invalid credentials') {
          const { token, doctor } = data;
          alert('Success');

          localStorage.setItem('token', token);
          localStorage.setItem('doctor_Id', doctor);

          if (role === 'user') {
            navigate('/patient'); // Redirect to the "/cake" route after successful user login
          } else if (role === 'admin') {
            navigate('/doctor'); // Redirect to the "/customers" route after successful admin login
          }
        } else {
          toast.error('Invalid credentials');
        }
      })
      .catch((err) => {
        toast.error('Login Failed due to: ' + err.message);
      });
  }

  else {
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // Return the response as JSON
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .then((resp) => {
        if (resp !== 'Invalid credentials') {
          const { token, patient } = resp;

          localStorage.setItem('token', token);
          localStorage.setItem('patient_Id', patient);
         

          if (role === 'user') {
            navigate('/Ipat');
          } else if (role === 'admin') {
            alert('logged in');
            navigate('/Idoc');
          }
        } else {
          toast.error('Invalid credentials');
        }
      })
      .catch((err) => {
        toast.error('Login Failed due to: ' + err.message);
      });
  }
};
   
  return (
    
 
    <div className="row justify-content-center"  style={{ backgroundImage: `url(${loginimg})`, backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight:'80vh', minWidth:'80%', border: '2px solid rgba(255,255,255,0.5)'}}  >
      
      <div className="col-lg-4" style={{ marginTop: '100px'}}>
        <div className="card" style={{border: 'none' }}>
         
        </div>
      </div>
      
      <div className="col-lg-4" style={{ marginTop: '100px' , backdropFilter: 'blur(15px)'}}>
        <form onSubmit={proceedLoginUsingAPI} className="container">
        <div className="card transparent" style={{ backgroundColor: 'transparent', border: 'none', height: '500px' }}>
        <div className="card-header" style={{ backgroundColor: '#e85189', color: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <h2>User Login</h2>
</div>
<br />
            <div className="card-body">
              <div className="form-group">
                <label style={{ color: 'black' }}>User Name <span className="errmsg">*</span></label>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                  style={{ borderColor: '#FFC107' }}
                />
              </div>
              <br />
              <div className="form-group">
                <label style={{ color: 'black' }}>Password <span className="errmsg">*</span></label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  style={{ borderColor: '#FFC107' }}
                />
              </div>
              <br />
              <div className="form-group">
                <label style={{ color: 'black' }}><b>Role</b> <span className="errmsg">*</span></label><br />
                <div className="form-check">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={role === 'user'}
                    onChange={() => setRole('user')}
                    className="form-check-input"
                  />
                  
                  <label className="form-check-label" style={{ color: 'black' }}>Patient</label>
                </div>
                
                <div className="form-check">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === 'admin'}
                    onChange={() => setRole('admin')}
                    className="form-check-input"
                  />
                  
                  <label className="form-check-label" style={{ color: 'black' }}>Doctor</label>
                </div>
              </div>
            </div>
            <div className="card-footer text-center" style={{ backgroundColor: '#F2F2F2' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: '#FFC107', borderColor: '#FFC107' }}
              >
                Login
              </button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}