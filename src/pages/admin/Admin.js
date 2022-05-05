import '../../resources/css/Design.css';

import logo from '../../resources/img/logo.png'; 
import usericon from '../../resources/img/usericon.png';
import announcing from '../../resources/img/announcing.png';
import highlight from '../../resources/img/highlight.png';
import users from '../../resources/img/users.png';
import grade from '../../resources/img/grade.png';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Admin extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <div>
                <div className="sidebar">
                    <div className="logo-details">
                        <img src={logo} className="bcplogo"  alt="bcp-logo"></img>
                        <span className="logo_name"> BCP Grading System </span>
                    </div>
                    {/* <!--code initiation for left  navigation bar-->
                </div>
                */}
                <ul className="nav-links">
                    <li>
                        <a href="">
                        <i className='bx bxs-dashboard'></i>
                        <span className="link_name"> Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-user-detail'></i>
                        <span className="link_name"> Student</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-edit-alt'></i>
                        <span className="link_name"> Student Highlight</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-food-menu'></i>
                        <span className="link_name"> Course</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-user-rectangle'></i>
                        <span className="link_name"> Teacher</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-book-content'></i>
                        <span className="link_name"> Subject</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-notepad'></i>
                        <span className="link_name">Grading Scale</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/login">
                        <i className='bx bxs-log-out-circle'></i>
                        <span className="link_name">Log out</span>
                        </Link>
                    </li>
                </ul>
                </div>
                {/* <!--homepage--> */}
                <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <span className="dashboard"> Dashboard </span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search"/>
                        <i className='bx bx-search-alt-2' ></i>
                    </div>
                    <div className="profile-details">
                        <img src={usericon}  alt="profile"/>
                        <span className="admin-name"> <a href=""> My Profile</a> </span>
                    </div>
                </nav>
                <div className="home-content">
                    <div className="overview-boxes">
                        <div className="box">
                            <div className="left-side">
                            <div className="indicator"><img src={announcing} /> </div>
                            <div className="box_topic">
                                <a href="">
                                    <center>Announcement</center>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="left-side">
                            <div className="highlights"><img src={highlight} /> </div>
                            <div className="box_topic">
                                <a href="">
                                    <center>Student Highlight</center>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-content">
                    <div className="overview-boxes">
                        <div className="boxe">
                            <div className="left-side">
                            <div className="diff-user"><img src={users} /> </div>
                            <div className="box_topic">
                                <a href="">
                                    <center>Users</center>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="boxe">
                            <div className="left-side">
                            <div className="grade-report"><img src={grade} /> </div>
                            <div className="box_topic">
                                <a href="">
                                    <center>Grade Reports</center>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
    
        )
    }
}
export default Admin;