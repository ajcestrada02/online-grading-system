import '../../resources/css/Design.css';
import logo from '../../resources/img/logo.png'; 
import { Link } from 'react-router-dom';
import { Component } from 'react';
class Login extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <div id="design">
                <div className="page">
                    <div className= "header">
                        <p> BESTLINK COLLEGE OF THE PHILIPPINES </p>
                        <img src={logo} className="bcplogo" alt="Norway"/>  
                    </div>
    
                    <div className="wholepage">
                        <form>
                            <span>
                                <br/> 
                                <br/>
                                
                                <input type="text" placeholder="username" id="UN" name="UN"required/>
                                
                            </span> <br/>
                            <span>
                            
                            <input type="password" placeholder="password" id="PW" name="PW" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                            </span> <br/>
                            
                            <button> LOG IN </button>
                            </form>
    
                            <Link to="/registration" id="btn"><button id="btn"> SIGN UP </button></Link>
                            
                            <div className="forgot">
                                <a href="">forgot your password or username?</a>    
                            </div>
                        </div>
                </div>
            </div>
        )
    }
    
}

export default Login;