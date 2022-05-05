import { Component } from 'react';
import '../../resources/css/Design.css';
import logo from '../../resources/img/logo.png'; 

class Landing extends Component{

    constructor(props){
        super(props)
        this.state = {
            value: props.value ? props.value : ''
        }
    }

    render(){
        return(
            <div id="design">
            <div className="frontpage">
                <div className= "header">
                    <h1> BESTLINK COLLEGE OF THE PHILIPPINES </h1>
                    <img src={logo} className="bcplogo" alt="Norway"/><br/><br/>
                </div>

                <center>  <button> ADMIN </button></center>
                <center>  <button> TEACHER </button></center>
                </div>
            </div>
        )
    }

}

export default Landing;