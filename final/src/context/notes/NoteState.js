
import NoteContext from "./notecontext";
import { useState } from "react";

const NoteState = (props)=>{
    const [addcollege, setAddcollege] = useState({
        name:"",
        phoneno:"",
       address:"",
        city:"",
        state:""
      });

      const [addmarksheet, setAddmarksheet] = useState({
        RollNo:"",
        Name: "",
        Physics: "",
        chemistry: "",
        Maths: "",
    
      });


      const [addrole, setAddrole] = useState({
        Name:"",
        Discription: "",
    
    
      });
      

    return (
        <NoteContext.Provider value={{addcollege,setAddcollege,addmarksheet,setAddmarksheet,addrole,setAddrole}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;