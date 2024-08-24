import React, { useContext , useEffect} from "react";
import { Context } from "./Context";
import Facebook from "./Image/facebookimg.svg"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import {useNavigate} from "react-router-dom";

let Login=()=>{

 
let [email,setemail]=useState("");
let [pass,setpass]=useState("");
let [password,setpassword]=useState(false);
let[check,setcheck]=useState(false);
let[check1,setcheck1]=useState(false);
let[check2,setcheck2]=useState(false);
let [login,setlogin]=useState(false);
let x=useNavigate();


let users=[{number:"9629774863",pass:"1234",email:"karthik@gmail.com"},
{number:"9159503354",pass:"234",email:"siva@gmail.com"}];


let {state,dispatch}=useContext(Context);

  localStorage.setItem('user',JSON.stringify(state.users));




let change=(e)=>{
  if(e.target.name== "number" )
  {
    setemail(e.target.value)
    e.target.value.length >10? setcheck2(true):setcheck2(false);
  }
  else if(e.target.name=="pass")
  {
   setpass(e.target.value); 
  }
}


let account=()=>{

  x("/Register");
}

let open=()=>{
  setpassword(!password);
}
let click=()=>{
  setcheck(false);
}
let click1=()=>{
  setcheck1(false);
 
}


let submit=(e)=>{

  e.preventDefault();

  if(email==""||pass=="")
  {
    setcheck1(true);
    setcheck(true);
  }



  
let s=state.users.find((val,index)=>{

  return ((val.phonenumber==email) && (pass==val.password))
})


dispatch({type:"detail",payload:s}); 


if(s)
{

dispatch({type:"correct",payload:true});
dispatch({type:"post",payload:false}); 
dispatch({type:"alert",payload:true});
setlogin(false);
}
else{
setlogin(true);
setemail("");
setpass("");
}


}


console.log("state",state.users);


return(
    
<div>
  <div className="container">
     <div className="login">
        <div className="picture">
           <div className="picture1"> 
             <img src={Facebook} alt="logo" />
          </div>
           <h2 className="heading">Facebook helps you connect and share with the people in your life.</h2>
        </div>

        <div className="form">
          <div className="form1">
            <div className="second">
             <form>
              <TextField  type="text" name="number"  placeholder="Email address or phone number" onClick={click1}  className={check1?"input1":"input2"} value={email} onChange={change} /><br/><br/>
              {email==""&&check1?<p className="error">Please Enter Your Email Address Or Phone Number <FaExclamationTriangle className="error1"/> </p>:""}
              {login?<p className="error">you entered isn't connected to an account.<FaExclamationTriangle className="error3"/> </p>:""}
              {email>10&&check2?<p className="error">Please check your Mobile number</p>:""}

              <TextField type={password?"text":"password"} onClick={click} className={check?"input1":"input2"} name="pass" placeholder="Password" value={pass}onChange={change} /><br/><br/>
              {pass==""&&check?<p className="error">Please Enter Your Password<FaExclamationTriangle className="error2"/></p>:""}

              {password?<span className={check?"password1":"password"} onClick={open}><FaEye /></span>:<span className={check?"password1":"password"} onClick={open}><FaEyeSlash/></span>}

              <button className="button" onClick={submit}>Log in</button><br/>

              <a href="#">Forgotten password?</a> <br/>
              <div className="line"></div>   <br/>
              <button className="button1" onClick={account}>Create new account</button>
            </form>
            </div>
          <div className="msg">
            <p><a href="#">Create a Page</a> for a celebrity, brand or business.</p>
        </div>
        
  </div>
 </div>

  
 
</div>
</div>
</div>

)}
export default Login;
