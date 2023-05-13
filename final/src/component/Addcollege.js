import React, { useContext,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import NoteContext from '../context/notes/notecontext';
export default function Addcollege() {
  const {_id}=useParams();
  
    const notecontext=useContext(NoteContext);
  const {addcollege,setAddcollege}=notecontext;


  
  
  useEffect(() => {
    if (_id) {
      studentup();
    }
  },[_id]);






  const studentup = async () => {
    await axios.get(`http://localhost:9002/college/addcollege/${_id}`,{ headers: {
      "auth-token":sessionStorage.getItem("token"),
        "Content-Type": "application/json"
  }})
      .then((res) => {
        console.log(res);
        setAddcollege(res.data.user);
      });
  };






  const Update = async(e) => {
    e.preventDefault()
    await axios.put(`http://localhost:9002/college/updatecollege/${addcollege._id}`,addcollege,{  headers: {
      "auth-token":sessionStorage.getItem("token"),
        "Content-Type": "application/json"
  }})
    .then((res) => {
     alert("update");
      console.log(res)

    })
  };





  const handalevent = (e) => {
     const { name, value } = e.target;
     setAddcollege({
       ...addcollege,
       [name]: value,
     });
     //  console.log(user)
   };
 
  const register = (e) => {
    e.preventDefault()
        axios.post("http://localhost:9002/college/Addcollege", addcollege, {
            headers: {
              "auth-token": sessionStorage.getItem("token"),
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
    
            if(res.data.message){
              alert("login success fully")
            }
         
          });
      };

  return (
    <div className="container my-4" >
    <h1 style={{marginLeft:"417px"}}>Add College</h1>
    <form  className='my-3' style={{marginLeft:"400px"}}>
        <div className="mb-3">
            <label htmlFor="firstname" className="form-label">Name:</label>
            <input type="text" className="form-control" id="firstname" name='name' value={addcollege.name}  onChange={handalevent}  style={{width:"40%"}} aria-describedby="emailHelp"   minLength={2} required />

        </div>
        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">PhoneNo:</label>
            <input type="text" className="form-control" id="lastname" name='phoneno' value={addcollege.phoneno} onChange={handalevent}  style={{width:"40%"}}   minLength={2} required />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Address:</label>
            <input type="text" className="form-control" id="email" name='address' value={addcollege.address} onChange={handalevent} style={{width:"40%"}} minLength={4} required />
        </div>
        <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">City:</label>
            <input type="text" className="form-control" id="mobileNo" name='city' value={addcollege.city} onChange={handalevent} style={{width:"40%"}}  minLength={10} required />
        </div>
        <div className="mb-3">
            <label htmlFor="collegeId" className="form-label">State:</label>
            <input type="text" className="form-control" id="collegeId" name='state' value={addcollege.state} onChange={handalevent}  style={{width:"40%"}} minLength={3}  required />
        </div>

        <button type="submit" className="btn btn-primary"   onClick={ register}>Submit</button>
        <button type="submit" className="btn btn-primary"  style={{marginLeft:"133px"}}  onClick={ Update}>update</button>
    </form>
</div> 
 
  )
}
