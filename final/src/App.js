import React from 'react'
import Login from './component/login'
import Ragistration from './component/ragistration'
// import './component/ajay.css'
// import Homepage from './component/homepage'

import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navbar from './component/Navbar';
import NoteState from './context/notes/NoteState';
import Nextpage from './component/nextpage';
export default function App() {
  return (
    
    <>
    {/* <Homepage/> */}
    <NoteState>
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path='/ragistration' component={Ragistration} />
        <Route exact path="/about" component={Nextpage} />

      </Switch>
    </Router>
    </NoteState>
    {/* </NoteState> */}
  </>





    // <div>
          
    //      <Navbar/>
    //      <Login/>
    //      {/* <Ragistration/> */}
         
    // </div>
  )
}
