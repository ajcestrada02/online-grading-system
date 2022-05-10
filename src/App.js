import React,{useState,useEffect, Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import PortalTemplate from './pages/components/PortalTemplate';
class App extends Component {

  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <Router>
          <Routes>
            {/* <Route exact path="/" element={<Landing/>}/> */}
            <Route exact path="/" element={<PortalTemplate/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/admin" element={<Admin/>}/>

          </Routes>
      </Router>
    )
  }
}

export default App;
