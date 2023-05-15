import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Collegelist() {
  const [collegedata, setCollegedata] = useState([]);


  useEffect(() => {
    student();
  }, []);





  const student = () => {
    axios.get("http://localhost:9002/college/fetchstudent",{
      headers: {
        "auth-token":sessionStorage.getItem("token"),
          "Content-Type": "application/json"
    }
    })
    
    
    .then((res) => {
      console.log(res)
      setCollegedata(res.data);
    });
  };





  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:9002/college/deleteaddcollege/${id}`,{
        headers: {
          "auth-token":sessionStorage.getItem("token"),
            "Content-Type": "application/json"
      }
      })
      .then((res) => {
        student();
        console.log(res);
      });
  };



  return (
    <>
      {/* <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update student</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
     
          </div>
        </div>
      </div>

      <div>
       
       
        <table  style={{ width: "90%", margin: "90px 90px" }} className="table table-success table-hover table-bordered border-success"> 
          <thead className="table-dark">
            <tr >
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">PhoneNo</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Edit  &nbsp; &nbsp; &nbsp;Delete</th>
              {/* <th scope="col">Edit</th> */}

            </tr>
          </thead>
          <tbody>
            {collegedata.map((data, i) => {

              return <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.phoneno}</td>
                <td>{data.address}</td>
                <td>{data.city}</td>
                <td>{data.state}</td>
                <td>
                {/* <td><i className="fa-solid fa-trash mx-2" onClick={() => { deleteStudent(data._id) ;props.showAlert("deleted successfully", "success");}}></i></td> */}

                {/* <td> <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateStudents(data); }}></i></td> */}



                <Link className="btn btn -primary m-2"class="fa fa-eye"aria-hidden="true"></Link>
                <Link className="btn btn-outline-primary m-2" to={`/editcollege/${data._id}`}> Edit</Link>
                <Link className="btn btn-danger m-2 "   onClick={() => deleteuser(data._id)} >Delete</Link>
               
                </td>
              </tr>
            })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
