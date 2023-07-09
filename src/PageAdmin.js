import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Admin() {
  const [adminPassword, setPassword] = useState('');
  const [adminName, setUserName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      let inputobj = {
        admin_Name: adminName,
        admin_Password: adminPassword,
      };
      fetch('https://localhost:7145/api/Token/Admin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(inputobj),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Invalid credentials');
          }
          return res.text();
        })
        .then((resp) => {
          console.log(resp);
          toast.success('Success');
          localStorage.setItem('token', resp);
          navigate('/admin');
        })
        .catch((err) => {
          toast.error('Login Failed due to: ' + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (adminName.trim() === '') {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (adminPassword.trim() === '') {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  };

  return (
    <div className="container py-5 h-100" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=996&t=st=1688403544~exp=1688404144~hmac=6ae4c6a1ae3c693d708a4b85f0f76eb205029d5d4e5da573ac69789c931d4f64')", backgroundPosition: 'center', backgroundSize: 'cover' , backdropFilter: 'blur(15px)', minHeight: '100vh', minWidth: '100%'}}>
             
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-transparent text-white" style={{ borderRadius: '1rem', backdropFilter: 'blur(15px)', border: '2px solid rgba(255,255,255,0.5)' }}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <form onSubmit={proceedLoginUsingAPI} className="container">
              <div className="card-body">
                  <div className="form-group">
                          <label>User Name <span className="errmsg">*</span></label>
                          <input value={adminName} onChange={e => setUserName(e.target.value)} className="form-control"></input>
                      </div>
                      <div className="form-group">
                          <label>Password <span className="errmsg">*</span></label>
                          <input type="password" value={adminPassword} onChange={e => setPassword(e.target.value)} className="form-control"></input>
                      </div>
                  </div><br/>
                  <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Login</button> 
                  </div>
                  </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  
}
