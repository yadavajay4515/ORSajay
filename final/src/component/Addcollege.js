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
      if(_id){
      
      }

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
              alert("addstudent success fully")
              setAddcollege({ name: "", phoneno: "", address: "", city: "", state: "" });
            }
           
          });
      };
      // .then((res) => {
      //   console.log(res);

      //   if(res.data.success){
      //     alert("addstudent success fully")
      //     setAddcollege({ name: "", phoneno: "", address: "", city: "", state: "" });
      //   }
       
      // });

  return (
    <div className="container my-4" >

{(()=>{




if (_id) {
  return (

    <h3 style={{marginLeft:"417px"}}>update college</h3>
  )
}
  if(!_id){
    return(
      <h3 style={{marginLeft:"450px"}}>Add college</h3>
    )
  }
})()
}

      

      

      {/* {(()=>{
        if(!_id){
          return(
            
          )
        }
      })} */}
  
    <form  className='my-3' style={{marginLeft:"400px"}}  onSubmit={register}>
        <div className="mb-3">
            <label htmlFor="firstname" className="form-label">Name:</label>
            <input type="text" className="form-control" id="firstname" name='name' placeholder='enter the name' value={addcollege.name}  onChange={handalevent}  style={{width:"40%"}} aria-describedby="emailHelp"   minLength={2} required />

        </div>
        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">PhoneNo:</label>
            <input type="text" className="form-control" id="lastname" name='phoneno' placeholder='enter phoneNo' value={addcollege.phoneno} onChange={handalevent}  style={{width:"40%"}}   minLength={2} required />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Address:</label>
            <input type="text" className="form-control" id="email" name='address'  placeholder='enter the address' value={addcollege.address} onChange={handalevent} style={{width:"40%"}} minLength={4} required />
        </div>
        <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">City:</label>
            <input type="text" className="form-control" id="mobileNo" name='city' placeholder='enter the city' value={addcollege.city} onChange={handalevent} style={{width:"40%"}}  minLength={4} required />
        </div>
        <div className="mb-3">
            <label htmlFor="collegeId" className="form-label">State:</label>
            <input type="text" className="form-control" id="collegeId" name='state' placeholder='enter the state' value={addcollege.state} onChange={handalevent}  style={{width:"40%"}} minLength={3}  required />
        </div>



{
(()=>{
  if(_id){
    return (

      <button type="submit" className="btn btn-primary"style={{width:"290px"}}  onClick={ Update}>update</button>
    )

  }
if(!_id){
  return (

    <button type="submit" className="btn btn-primary"  style={{width:"290px"}} >Submit</button>
  )
}
})()
}

   
    </form>
</div> 
 
  )
}
