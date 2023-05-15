// // import React from 'react'
import React, { useContext ,useEffect} from 'react'
import { useParams } from "react-router-dom";
// import NoteState from '../context/notes/NoteState';
import NoteContext from '../context/notes/notecontext';
import axios from "axios";
export default function Addmarksheet() {

  const {_id}=useParams();

    const notecontext=useContext(NoteContext);
  const {addmarksheet,setAddmarksheet}=notecontext;



  
  useEffect(() => {
    if (_id) {
      studentup();
    }
  },[_id]);





  const studentup = async () => {
    await axios.get(`http://localhost:9002/marksheet/addmarksheet/${_id}`,{ headers: {
      "auth-token":sessionStorage.getItem("token"),
        "Content-Type": "application/json"
  }})
      .then((res) => {
        console.log(res);
        setAddmarksheet(res.data.user);
      });
  };







  const Update = async(e) => {
    e.preventDefault()
    await axios.put(`http://localhost:9002/marksheet//updatemarksheet/${addmarksheet._id}`,addmarksheet,{  headers: {
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
    setAddmarksheet({
      ...addmarksheet,
      [name]: value,
    });

  };




  const register = (e) => {
    e.preventDefault()
        axios.post("http://localhost:9002/marksheet/Addmarkseet", addmarksheet, {
            headers: {
              "auth-token": sessionStorage.getItem("token"),
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
    
            if(res.data.message){
              alert("login success fully")
            }
            // history.push("/");
            console.log(res);
          });
      };


  return (
    <div className="container my-4" >
<center>
{
  (()=>{
    if(_id){
      return (

        <h2  style={{marginRight:"10px"}}>update Marksheet</h2>
      )
    }
    if(!_id){
      return (

        <h2 >Add Marksheet</h2>
      )
    }
  })()
}
</center>
   
    <form  className='my-3' style={{marginLeft:"400px"}}  onSubmit={register}  >
        <div className="mb-3">
            <label htmlFor="firstname" className="form-label">RollNo:</label>
            <input type="text" className="form-control" id="firstname" name='RollNo' placeholder='enter the RollNo' value={addmarksheet.RollNo} onChange={handalevent} style={{width:"40%"}}  minLength={2} required />

        </div>
        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Name:</label>
            <input type="text" className="form-control" id="lastname" name='Name' placeholder='enter the name' value={addmarksheet.Name} style={{width:"40%"}} onChange={handalevent}   minLength={2} required />
        </div>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Physics:</label>
            <input type="text" className="form-control" id="email" name='Physics' placeholder='physics number' value={addmarksheet.Physics} style={{width:"40%"}} onChange={handalevent} minLength={2} required />
        </div>
        <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">chemistry:</label>
            <input type="text" className="form-control" id="mobileNo" name='chemistry' placeholder='chemistry number' value={addmarksheet.chemistry} style={{width:"40%"}} onChange={handalevent} minLength={2} required />
        </div>
        <div className="mb-3">
            <label htmlFor="collegeId" className="form-label">Maths:</label>
            <input type="text" className="form-control" id="collegeId" name='Maths' placeholder='maths number' value={addmarksheet.Maths} onChange={handalevent} style={{width:"40%"}} minLength={2}  required />
        </div>


        {
          (()=>{
            if(_id){
              return (
                <button type="submit" className="btn btn-primary" style={{width:"295px"}}  onClick={ Update}>Update</button>
              )
            }
            if(!_id){
              return(
                <button type="submit" className="btn btn-primary"  style={{width:"295px"}} >Submit</button>
              )
            }
          })()
        }

       
       
    </form>
</div>
  )
}
