import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
      .then((res) => res.text())
      .then((resp) => {
        console.log(resp);

        if (resp !== 'Invalid credentials') {
          toast.success('Success');
          localStorage.setItem('token', resp);
          
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
  };
  return (
    
    //<div className="row justify-content-center" style={{backgroundImage : "url('https://e1.pxfuel.com/desktop-wallpaper/721/613/desktop-wallpaper-abstract-login-page-thumbnail.jpg')"}}>
    <div className="row justify-content-center"style={{ backgroundImage: 'url("https://i.pinimg.com/originals/64/2a/bd/642abdf64e03384de6e63f91be8fc8f6.jpg")', backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backdropFilter: 'blur(15px)'}} >
      
      <div className="col-lg-4" style={{ marginTop: '100px'}}>
        <div className="card" style={{border: 'none' }}>
          <img
            src="https://media.istockphoto.com/id/1184392461/vector/online-healthcare-female.jpg?s=612x612&w=0&k=20&c=50XjfH713KFh9EF0P2gIeP_6-YC1qQ2q7V0srZLi8O0="
            className="card-img-top"
            alt="Card Image"
            style={{ width: '100%', height: '500px' }}
          />
        </div>
      </div>
      
      <div className="col-lg-4" style={{ marginTop: '100px' }}>
        <form onSubmit={proceedLoginUsingAPI} className="container">
        <div className="card transparent" style={{ backgroundColor: 'transparent', border: 'none', height: '500px' }}>
      <div className="card-header" style={{ backgroundColor: '#e85189', color: '#FFFFFF' }}>
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label style={{ color: '#333333' }}>User Name <span className="errmsg">*</span></label>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                  style={{ borderColor: '#FFC107' }}
                />
              </div>

              <div className="form-group">
                <label style={{ color: '#333333' }}>Password <span className="errmsg">*</span></label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  style={{ borderColor: '#FFC107' }}
                />
              </div>
              <div className="form-group">
                <label style={{ color: '#333333' }}>Role <span className="errmsg">*</span></label>
                <div className="form-check">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={role === 'user'}
                    onChange={() => setRole('user')}
                    className="form-check-input"
                  />
                  <label className="form-check-label">Patient</label>
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
                  <label className="form-check-label">Doctor</label>
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
              |
              <Link
                className="btn btn-success"
                to={'/register'}
                style={{ backgroundColor: '#28A745', borderColor: '#28A745' }}
              >
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}