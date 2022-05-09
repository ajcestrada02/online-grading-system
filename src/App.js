import React,{useState,useEffect, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';

class App extends Component {
  // TODO: Need to have a login function
  // const [token, setToken] = useState();

  // if(!token){
    // return <Login setToken={setToken}/>
  // }

  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <Router>
          <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
      </Router>
    )
  }
}

export default App;
