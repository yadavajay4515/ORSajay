
import React, { useContext ,useEffect} from 'react'
import { useParams } from "react-router-dom";
import NoteContext from '../context/notes/notecontext';
import axios from "axios";
export default function Addrole() {
    const {_id}=useParams();

    const notecontext=useContext(NoteContext);
    const {addrole,setAddrole}=notecontext;



  
    useEffect(() => {
        if (_id) {
          studentup();
        }
      },[_id]);
    



      const studentup = async () => {
        await axios.get(`http://localhost:9002/Role/addroleget/${_id}`,{ headers: {
          "auth-token":sessionStorage.getItem("token"),
            "Content-Type": "application/json"
      }})
          .then((res) => {
            console.log(res);
            setAddrole(res.data.user);
          });
      };
    
    


      const Update = async(e) => {
        e.preventDefault()
        await axios.put(`http://localhost:9002/Role/updaterole/${addrole._id}`,addrole,{  headers: {
          "auth-token":sessionStorage.getItem("token"),
            "Content-Type": "application/json"
      }})
        .then((res) => {
         alert("update");
          console.log(res)
    
        })
      };
    


    const register = (e) => {
        e.preventDefault()
            axios.post("http://localhost:9002/Role/Addrole", addrole, {
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
    


    
  const handalevent = (e) => {
    const { name, value } = e.target;
    setAddrole({
      ...addrole,
      [name]: value,
    });

  };


  return (
    <div className="container my-4" >
      <center>
        {
          (()=>{
            if(_id){
              return (
                <h2>update role</h2>
              )
            }
            if(!_id){
              return(

                <h2>Add Role</h2>
              )
            }
          })()
        }
      </center>
    
    <form  className='my-3' style={{marginLeft:"400px"}}  onSubmit={ register}>
        <div className="mb-3">
            <label htmlFor="firstname" className="form-label">Name</label>
            <input type="text" className="form-control" id="firstname" name='Name' placeholder='enter the name' value={addrole.Name} onChange={handalevent} style={{width:"40%"}} aria-describedby="emailHelp"   minLength={2}  required />

        </div>
        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Discription</label>
            <input type="text" className="form-control" id="lastname" name='Discription' placeholder='enter the Discription' value={addrole.Discription} onChange={handalevent} style={{width:"40%"}}   minLength={2} required />
        </div>
       {
        (()=>{
          if(_id){
            return (
      <button type="submit" className="btn btn-primary"  style={{width:"295px"}}   onClick={ Update}>Update</button>
            )
          }
          if(!_id){
             return (
              <button type="submit" className="btn btn-primary"  style={{width:"295px"}}  >Submit</button>
             )
          }
        })()
       }

      
        
    </form>
</div>
  )
}
