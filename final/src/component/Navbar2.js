// import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState ,useEffect} from "react";
import axios from "axios";
  export default function Navbar2() {
    const [roledata, setroledata] = useState([]);




    useEffect(() => {
      if(sessionStorage.getItem("token")){
        student();
      }
    }, []);
  





    const student = () => {
      axios.post("http://localhost:9002/auth/getregis",{},{
        headers: {
          "auth-token":sessionStorage.getItem("token"),
            "Content-Type": "application/json"
      }
      })
        .then((res) => {
        console.log(res)
        console.log(res.data)
        setroledata(res.data);
      });
    };
  
  
  





   const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

 
    return (

<>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/addstudent">ORS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
               <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Student
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item"  to="/addstudent">AddStudent</Link></li>
                  <li><Link className="dropdown-item" to="/studentlist">Student List</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Marksheet
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/addmarkseet">Addmarksheet</Link></li>
                  <li><Link className="dropdown-item" to="/markseetlist">Marksheet List</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  College
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item"  to="/addcollege">Addcollege</Link></li>
                  <li><Link className="dropdown-item" to="/collegelist">College List</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Role
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/addrole">Addrole</Link></li>
                  <li><Link className="dropdown-item" to="/rolelist">Role List</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  user
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/adduser">UserList</Link></li>
                
                </ul>
              </li>
            </ul> 

          
              
                : <>
               
                  <div className="btn-group">
                    <button className="btn btn-success btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                     {roledata.fname} {roledata.lname}
                  
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                      <li><button className="dropdown-item btn-sm  "  onClick={logout} >Logout</button></li>
                     
                    </ul>
                  </div>
                </>
            

          </div>
        </div>
      </nav>

    </>
  
    )
  }

