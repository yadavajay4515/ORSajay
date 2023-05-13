// import React from "react";
// import { useState ,useEffect} from 'react'
// import axios from "axios"
// import {useParams} from "react-router-dom"
 


// const Edituser=()=>{

   
    

//   const {_id}=useParams()
//   console.log(_id)
//     const[user, setuser] = useState({
//         firstname:"",
//         lastname:"",
//         email:"",
//         mobileno:"",
//         collegeid:""
//      })


//      const handalevent=e=>{
//         console.log(e.target)
//        const { name, value} = e.target
//        setuser({
//              ...user,
//              [name]:value,
//        })
//       //  console.log(user)
//    }



//    useEffect(()=>{
//     loaduser(_id)
// },[]);

// const student= async()=>{
//   await axios.put(`http://localhost:9002/Addstudent/addstudent/${_id}`,user)
//   .then((res)=>{
//       console.log(res)
//   })

// }

// const loaduser = async() => {
//     await axios.get(`http://localhost:9002/Addstudent/addstudent/${_id}`)
//     .then((res) => {
//       setuser(res.data);
//       console.log(setuser)

//     })
//   };
   

//     return(
//         <>
//         <center>
        
         
//           <h2>Ragistration form </h2>
        
//             <form>
//             <table>
    
//     <label for="inputEmail3" class="col-sm-2 col-form-label">FirstName: </label>
//     <p style={{ marginBottom: '0rem' }}> <input style={{ width: '308px' }} name="firstname"  value={user.firstname} onChange={handalevent}  class="form-control" type="text" id="t1" placeholder="Enter Firstname"  /> </p>
//     <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}> </div>
    
//     <label for="inputEmail3" class="col-sm-2 col-form-label">LastName:</label>
//     <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} name="lastname" value={user.lastname} onChange={handalevent} class="form-control" type="text" id="t1" placeholder="Enter Lastname"    /></p>
//     <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}></div>
    
//     <label for="inputEmail3" class="col-sm-2 col-form-label">emailId:</label>
//     <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }}name="email" value={user.email} onChange={handalevent} class="form-control" type="text" id="t1" placeholder="Enter emailId"    /></p>
//     <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}></div>
    
//     <label for="inputEmail3" class="col-sm-2 col-form-label">MobileNo:</label>
//     <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} name="mobileno" value={user.mobileno} onChange={handalevent} class="form-control" type="text" id="t1" placeholder="Enter mobileNo"   /></p>
//     <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}></div>
    
//     <label for="inputEmail3" class="col-sm-2 col-form-label">collegeId:</label>
//     <p style={{ marginBottom: '0rem' }}><input style={{ width: '308px' }} name="collegeid" vlaue={user.collegeid} onChange={handalevent} class="form-control" type="number" id="t1" placeholder="Enter collegeId"  /></p>
//     <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '22px', width: '298px' }}></div>
    
//     <br></br>
    
//     <button type='button' class="btn btn-primary" onClick={student} style={{ marginRight: '67px', width: "110px", marginLeft: '26px' }}>Add Student</button>
//     <button type='button' class="btn btn-primary" className='B' onClick={student}>reset</button>
    
//     </table> 
              
//      </form>
    
        
          
//           </center>
//         </>
    
//     );
// }

// export default Edituser