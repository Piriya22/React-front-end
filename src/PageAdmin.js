import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";



export default function Admin() {
   
    const [admin_Password, passwordupdate] = useState('');
    const [admin_name, userNameupdate] = useState('');

    const navigate=useNavigate();

    useEffect(() => {
         sessionStorage.clear();
        },[])
const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('proceed');
            let inputobj={"admin_name":admin_name,
            "admin_Password": admin_Password};
            console.log(JSON.stringify(inputobj))
            fetch("https://localhost:7145/api/Token/Admin",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.text();
            }).then((resp) => {
                console.log(resp)
                toast.success('Success');
                localStorage.setItem('token',resp);
                navigate('/doctor')                          
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }


   const validate = () => {
        let result = true;
        if (admin_name === '' || admin_name === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (admin_Password === '' || admin_Password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <div className="container py-5 h-100" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/02/22/27/98/240_F_222279831_MhIWG3RsSMqwxZ9qEg6gw4YUm7UkURYh.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-transparent text-white" style={{ borderRadius: '1rem', backdropFilter: 'blur(15px)', border: '2px solid rgba(255,255,255,0.5)' }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <form onSubmit={ProceedLoginusingAPI} className="container">
                    <div className="card-body">
                        <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={admin_name} onChange={e => userNameupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={admin_Password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button> |
                            <Link className="btn btn-success" to={'/register'}>New User</Link>
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