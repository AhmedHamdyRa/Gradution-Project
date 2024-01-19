import React, { useEffect, useState,useContext } from "react";
import {AuthContext,AuthProvider} from "./AuthContext";
import './Log.css';

function FunCom () {
    const [email,setfName]=useState('');
    const [password,setlName]=useState('');

    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const btnRef = React.useRef();

    const authContext = useContext(AuthContext)
    
    useEffect(()=>{
        emailRef.current.focus();
    } ,[]);

    function onfirstinputKey(e){
        if(e.key==='Enter'){
            passwordRef.current.focus();
        }  
    }

    function onsecondinputKey(e){
        if(e.key==='Enter'){
            btnRef.current.focus();
        }
    }

    function run(){
        //console.log({email,password})

        //@todo Send Api Request to validate data and get token ? -> we will use axios req Post and send email and password
        //we will recive message that data is correct or not 
        // will fake it if message true :
        if (password==='123'){
            const token = 'abc';
            localStorage.setItem('token',token)
            localStorage.setItem('email',email)
            authContext.setAuth({token,email})
        }
        else{
            alert('wrong details')
        }
    }

    return (
<div className="LOGIN">

    <div className="LOG">
        <form>
            <h4>Login</h4>
            
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <br/>
            <input type="email" ref={emailRef} onKeyDown={onfirstinputKey} placeholder="email" value={email} onChange={(e)=>setfName(e.target.value)}/>
            <br/> <br/>
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <br/>
            <input type="password" ref={passwordRef} onKeyDown={onsecondinputKey} placeholder="password" value={password} onChange={(e)=>setlName(e.target.value)}/>
            <br/> <br/>
            <a href="/Sign">Sign Up</a><br/><br/>
            <a href="/Home">
            <button type="button" class="btn btn-success" ref={btnRef} onClick={run}>Submit</button>
            </a>
        </form>
    </div>
</div>
    );
    }
function AppWithStore(){
  return(
  <AuthProvider>
    <FunCom/>
  </AuthProvider>
  )
}
export default AppWithStore;

