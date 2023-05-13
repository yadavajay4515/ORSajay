import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class Navbar2 extends Component {
  logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };
  render() {
    return (
     
      <div >
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="dropdown">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Student
            </button>
            <ul className="dropdown-menu">
              <Link className="dropdown-item" to="/addstudent">
                Addstudent
              </Link>
              <li>
                <Link className="dropdown-item" to="/studentlist">
                  StudentList
                </Link>
              </li>
            </ul>
          </div>

          <div >
            <div className="collapse navbar-collapse">
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{marginLeft:"20px"}}
                  >
                    college
                  </button>
                  <ul className="dropdown-menu">
                    <Link className="dropdown-item" to="/addcollege">
                      Add College
                    </Link>
                    <li>
                      <Link className="dropdown-item" to="/collegelist">
                        college List
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>

              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ marginLeft: "20px" }}
                  >
                    Marksheet
                  </button>
                  <ul className="dropdown-menu">
                    <Link className="dropdown-item" to="/addmarkseet" >
                      Add markseet
                    </Link>
                    <li>
                      <Link className="dropdown-item"to="/markseetlist">
                        Markseet List
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>

              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ marginLeft: "20px" }}
                  >
                    Role
                  </button>
                  <ul className="dropdown-menu">
                    <Link className="dropdown-item" to="/addrole">
                      Role add
                    </Link>
                    <li>
                      <Link className="dropdown-item" to="/rolelist">
                        Role list
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>

              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ marginLeft: "20px" }}
                  >
                    Users
                  </button>
                  <ul className="dropdown-menu">
                    <Link className="dropdown-item" to="/adduser">
                     ragister UserData
                    </Link>
                    {/* <li>
                      <Link className="dropdown-item" to="/userlist">
                        ser List
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </nav>

              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Link className="nav-link" to="/studentlist">
                    StudentList
                  </Link>
                </li>




                <li className="nav-item">
                  <Link className="nav-link" to="/edit">
                    Addcollage
                  </Link>
                </li>
              </ul> */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ marginLeft: "50px" }}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              <Link
                style={{ marginLeft: "450px" }}
                className="fa fa-sign-out"
                aria-hidden="true"
                onClick={() => {
                  this.logout();
                }}
                to="/login"
              >
                logout{" "}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
