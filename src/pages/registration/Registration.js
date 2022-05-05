import { Component } from 'react';
import '../../resources/css/Design.css';
import logo from '../../resources/img/logo.png'; 


class Registration extends Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <div id="design">
                <div className="registrationpage">
                    <div className= "header">
                        <p> BESTLINK COLLEGE OF THE PHILIPPINES </p>
                        <img src={logo} className="bcplogo" alt="Norway"/>  
                        <h2> REGISTRATION FORM </h2>
                    </div>
                    <form>
                        <span>
                            <input type="text" placeholder="Firstname" id="FN" name="First"required/>
                            
                            <span>
                            <input type="text" placeholder="Lastname" id="LN" name="Last"required/>
                            </span>
                            
                            <span>
                            <input type="text" placeholder="username" id="UN" name="User"required/>
                            </span>
                            
                            <span>
                            <input type="tel" placeholder="mobile number" id="phone" name="phone" pattern="[0]{1}[9]{1}[0-9]{9}" required/>
                            
                            </span>
                            
                            <span>
                            <input type="add" placeholder="Address" id="adree" name="AD"  required/>
                            
                            </span>
                            
                            
                            <span>
                            <input type="email" placeholder="Email address" id="EA" name="Email"required/>
                            </span>
                            
                            <span>
                            <input type="password" placeholder="password" id="PW" name="Pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"required/>
                            </span>
                            <span>
                            <input type="password" placeholder="Confirm password" id="CP" name="ConfirmPass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"required/>
                            </span><br/>
                            
                            <center>  <button> SIGN UP </button></center>
                            <div className="forgot">
                            <center>   <a href="">forgot password or username?  </a></center> </div>
                           
                            </span>
                            </form>
                          
                        </div>
                        
    
                
            </div>
        )
    }
}

export default Registration;