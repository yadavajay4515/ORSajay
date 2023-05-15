import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Ragistration() {
 
  const {_id}=useParams();
  
  useEffect(() => {
    if (_id) {
      studentup();
    }
  },[_id]);

  const [user, setuser] = useState({
    _id:"",
    firstname: "",
    lastname: "",
    email: "",
    mobileno: "",
    collegeid: "",
  });

const [msg, setmsg] = useState({ msgs: "", error: "" });

  const handalevent = (e) => {
  const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
    
  };
  const studentup = async () => {
    await axios.get(`http://localhost:9002/Addstudent/addstudent/${_id}`,{ headers: {
      "auth-token":sessionStorage.getItem("token"),
        "Content-Type": "application/json"
  }})
      .then((res) => {
        console.log(res);
        setuser(res.data.user);
      });
  };
  
  
  

   const Update = async(e) => {
    e.preventDefault()
    await axios.put(`http://localhost:9002/Addstudent/updatenote/${_id}`,user,{  headers: {
      "auth-token":sessionStorage.getItem("token"),
        "Content-Type": "application/json"
  }})
    .then((res) => {
      console.log(res)
     alert("update");
     setuser({ firstname: "", lastname: "", email: "", mobileno: "", collegeid: "" });

    })
  };


        // .then((res) => {
      //   console.log(res);

      //   if(res.data.success){
      //     alert("addstudent success fully")
      //     setAddcollege({ name: "", phoneno: "", address: "", city: "", state: "" });
      //   }
       
      // });

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9002/Addstudent/addstudent", user, {
        headers: {
          "auth-token": sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);

        if(res.data.success){
          // alert("addstudent success fully")
          setmsg({ error: "" });
          setmsg({ msgs: "successfully register" });
          setuser({ firstname: "", lastname: "", email: "", mobileno: "", collegeid: "" });
        }
        if (res.data.error) {
          setmsg({ msgs: "" });
          setmsg({ error: res.data.error });
        }
       
      });
  };

  return (
    <>
      <center>
      {(() => {
          if (_id) {
            return (

              <h4 >Update Student</h4>
            )
          }

          if (!_id) {
            return (

              <h4 >Add Student </h4>
            )
          }


        })()

      }

<p style={{ color: "green" }}>{msg.msgs}</p>
        <p style={{ color: "red" }}>{msg.error}</p>

        <form onSubmit={register}>
          <table>
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              FirstName:{" "}
            </label>
            <p style={{ marginBottom: "0rem" }}>
              
              <input
                style={{ width: "308px" }}
                name="firstname"
                value={user.firstname}
                onChange={handalevent}
                className="form-control"
                type="text"
                id="t1"
                placeholder="Enter Firstname"
                required
              />
            </p>
           

            <label for="inputEmail3" className="col-sm-2 col-form-label">
              LastName:
            </label>
            <p style={{ marginBottom: "0rem" }}>
              <input
                style={{ width: "308px" }}
                name="lastname"
                value={user.lastname}
                onChange={handalevent}
                className="form-control"
                type="text"
                id="t1"
                placeholder="Enter Lastname"
                required
              />
            </p>
           

            <label for="inputEmail3" className="col-sm-2 col-form-label">
              emailId:
            </label>
            <p style={{ marginBottom: "0rem" }}>
              <input
                style={{ width: "308px" }}
                name="email"
                value={user.email}
                onChange={handalevent}
                className="form-control"
                type="text"
                id="t1"
                placeholder="Enter emailId"
                required
              />
            </p>
           

            <label for="inputEmail3" className="col-sm-2 col-form-label">
              MobileNo:
            </label>
            <p style={{ marginBottom: "0rem" }}>
              <input
                style={{ width: "308px" }}
                name="mobileno"
                value={user.mobileno}
                onChange={handalevent}
                className="form-control"
                type="text"
                id="t1"
                placeholder="Enter mobileNo"
                required
              />
            </p>
          

            <label for="inputEmail3" className="col-sm-2 col-form-label">
              collegeId:
            </label>
            <p style={{ marginBottom: "0rem" }}>
              <input
                style={{ width: "308px" }}
                name="collegeid"
                value={user.collegeid}
                onChange={handalevent}
                className="form-control"
                type="text"
                id="t1"
                placeholder="Enter collegeId"
                required
              />
            </p>
            

            <br></br>

            {(() => {
          if (_id) {
            return (

              <button  style={{width:"320px"}}  type="button" onClick={Update} className="btn btn-primary ">
              Update student
             </button>
            )
          }

          if (!_id) {
            return (

              <button  style={{width:"320px"}}  type="submit" className="btn btn-primary ">
              Add student
             </button>
            )
          }


        })()

      }
           
            {/* <button type='button' className="btn btn-primary" className='B' onClick={studentup}>reset</button> */}
          </table>
        </form>
      </center>
    </>
  );
}
