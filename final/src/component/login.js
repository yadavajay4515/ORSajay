import React from "react";
import { useState} from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import Homepage from "./homepage";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",

  });
  const [error, setError] = useState();
  const handleChange = (e) => {  

    setUser({...user, [e.target.name]: e.target.value});
  };


  const login = (e) => {
    e.preventDefault();

    axios.post("http://localhost:9002/auth/login", user)
    .then((res) => {
      console.log(res)
       if(res.data.success){
        sessionStorage.setItem("token",res.data.authtoken)

       const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<Homepage />)
      }
      if(res.data.error){
        setError(res.data.error)

      }
  
    });
  };

  ///////////////////////////////////////////////




  
  // useEffect(() => {
  //   student();
  // }, []);






  // const student = () => {
  //   axios.post("http://localhost:9002/auth/getregis",user,{
  //     headers: {
  //       "auth-token":sessionStorage.getItem("token"),
  //         "Content-Type": "application/json"
  //   }
  //   })
  //     .then((res) => {
  //     console.log(res)
  //     setUser(res.data);
  //   });
  // };




  
  return (
    <>
      <center>
        <form style={{ margin: "117px" }} onSubmit={login}>
          <h2>Login page </h2>
          <p style={{color:"red"}}>{error}</p>

          <table>
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <p style={{ marginBottom: "0rem" }}>
              <input
              type="email"
                className="form-control"
                style={{ width: "240px" }}
                id="t1"
                placeholder="Enter Email ID"
                name="email"
                value={user.email}
                onChange={handleChange}
                minLength={4}
                required
              />
            </p>
          

            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label ">
              Password
            </label>
            <p style={{ marginTop: "-1rem" }}>
              <input
                className="form-control my-4"
                style={{ width: "240px" }}
                type="password"
                placeholder="Enter Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </p>
           
            <button type="submit" className="btn btn-primary" style={{width:"15rem"}} >
              Login
            </button>
           
          </table>
        </form>
      </center>
    </>
  );
}
