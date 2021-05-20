import React from 'react';
import classes from './Login.module.css';
//import Dashboard from './Dashboard.js'

//import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Login(props){
    
    const history = useHistory();

    function validation(event){
        //event.preventDefault();
        //console.log(document.getElementById('tex').value);
        var user = document.getElementById('tex').value;
        var pass = document.getElementById('pass').value
        
        if((user === 'user' && pass === 'user')){
            //<Dashboard />
            //console.log("HI")
            //props.history.push('/dashboard')
            console.log(document.getElementById('tex').value);
            history.replace('/dashboard')
            // <BrowserRouter>
            //     <Redirect from = "/login" to = "/dashboard" />
            // </BrowserRouter>
        }
        if((user === 'admin' && pass === 'admin')){
            history.replace('/userManagement')
            
        }
    }

    return(
        <div className={classes.modal}>
            <div className = {classes.modalContent}>
                <div className={classes.container}>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required className={classes.input} id = "tex" />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required className={classes.input} id = "pass"/>  
                    <button className={classes.button} onClick = {validation}>Login</button>
                    
                </div>
            </div>
             
        </div>

    );
}

export default Login