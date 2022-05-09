import { Component } from 'react';
import { NavLink} from 'react-router-dom';
import {Dropdown, Nav} from 'react-bootstrap';
import './PortalTemplate.css';
import GradingPage from '../teacher/GradingPage';

class PortalTemplate extends Component{

  constructor(props){
    super (props)
    this.state ={
      toggled:true
    }
  }

  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://localhost:8080/api/grading/load-student-grade-details?studentId=0')
      .then(response => response.json())
      .then(data => console.log(data));
  }
  
  handlerToggle(){
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
  }
  render(){
    return (
      <div>
        <div className="d-flex" id="wrapper">
            {/* <!-- Sidebar--> */}
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
                    <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/login">Logout</NavLink>
                </div>
            </div>
            {/* <!-- Page content wrapper--> */}
            <div id="page-content-wrapper">
                {/* <!-- Top navigation--> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-primary" id="sidebarToggle" onClick={(e) => this.handlerToggle()}>Toggle Menu</button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item dropdown">
                                  {/* <Dropdown>
                                  </Dropdown> */}
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- Page content--> */}
                <div className="container-fluid">
                    <GradingPage></GradingPage>
                </div>
            </div>
        </div>

      </div>
    );
  }
}
export default PortalTemplate;