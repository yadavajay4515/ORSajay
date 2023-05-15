import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Rolelist() {
  const [roledata, setroledata] = useState([]);


  useEffect(() => {
    student();
  }, []);





  const student = () => {
    axios.get("http://localhost:9002/Role/fetchrole",{
      headers: {
        "auth-token":sessionStorage.getItem("token"),
          "Content-Type": "application/json"
    }
    })
    
    
    .then((res) => {
      console.log(res)
      setroledata(res.data);
    });
  };





  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:9002/Role/deleterole/${id}`,{
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
              <th scope="col">Discription</th>
        
              <th scope="col">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Edit  &nbsp; &nbsp; &nbsp;Delete</th>
            

            </tr>
          </thead>
          <tbody>
            {
            roledata.map((data, i) => {

              return <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.Name}</td>
                <td>{data.Discription}</td>
             
                <td>
                   <Link className="btn btn -primary m-2"class="fa fa-eye"aria-hidden="true"></Link>
                <Link className="btn btn-outline-primary m-2" to={`/editrole/${data._id}`}> Edit</Link>
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
