import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Addstudent from "./Addstudent";
import Studentlist from "./Studentlist";
import Addcollege from "./Addcollege";
import Collegelist from "./collegelist";
import Addmarksheet from "./Addmarksheet";
import Markseetlist from "./markseetlist";
import Addrole from "./Addrole";
import Rolelist from "./rolelist";
import Adduser from "./Adduser";
import NoteState from "../context/notes/NoteState";


// import Edituser from './Edituser';
export default function Homepage() {



  
  return (
    <>
      <NoteState>
        <Router>
          <Navbar2 />
       
          <Switch>
            <Route exact path="/addstudent" component={Addstudent} />
            <Route exact path="/studentlist" component={Studentlist} />
            <Route exact path="/edit/:_id" component={Addstudent} />
            {/* <Route exact path='/edit/:_id' component={Edituser} /> */}

            <Route exact path="/addcollege" component={Addcollege} />
            <Route exact path="/collegelist" component={Collegelist} />
            <Route exact path="/editcollege/:_id" component={Addcollege} />

            <Route exact path="/addmarkseet" component={Addmarksheet} />
            <Route exact path="/markseetlist" component={Markseetlist} />
            <Route exact path="/editmarkshet/:_id" component={Addmarksheet} />

            <Route exact path="/addrole" component={Addrole} />
            <Route exact path="/rolelist" component={Rolelist} />
            <Route exact path="/editrole/:_id" component={Addrole} />

            <Route exact path="/adduser" component={Adduser} />
       
          </Switch>
        </Router>
      </NoteState>
      
    </>
  );
}
