import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Studentlist() { 

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    student();
  }, []);

  const student = () => {
    axios.get("http://localhost:9002/Addstudent/fetchstudent",{
      headers: {
        "auth-token":sessionStorage.getItem("token"),
          "Content-Type": "application/json"
    }
    })
    
    
    .then((res) => {
      setTableData(res.data);
    });
  };

  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:9002/Addstudent/deletenote/${id}`,{
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
    <div>
            <table className="table table-success my-5" >
        <thead className="table-dark text-white">
          <tr>
            <th scope="col">#</th>
            {/* <th scope="col">id</th> */}
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">email</th>
            <th scope="col">collegeId</th>
            <th scope="col">mobileNo</th>
            <th scope="col">Delete</th>
            {/* <th scope="col">Edit</th> */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              {/* <td>{item._id}</td> */}
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.collegeid}</td>
              <td>{item.mobileno}</td>
              <td>
            
                <Link className="btn btn -primary m-2"class="fa fa-eye"aria-hidden="true"></Link>
                <Link className="btn btn-outline-primary m-2" to={`/edit/${item._id}`}> Edit</Link>
                <Link className="btn btn-danger m-2 "onClick={() => deleteuser(item._id)}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
