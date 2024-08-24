import React, { useContext, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { FaQuestionCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { Context } from "./Context";



const Register=()=>{


  let {state,dispatch}=useContext(Context);  
let[firstname1,setfirstname1]=useState("");
let[surname1,setsurname1]=useState("");
let[fullname1,setfullname1]=useState();
let[poe1,setpoe1]=useState("");
let[password1,setpassword1]=useState("");
let[day1,setday1]=useState(0);
let[month1,setmonth1]=useState(0);
let[year1,setyear1]=useState(0);
let[dob1 ,setdob1]=useState();
let[number,setnumber]=useState(0);
let[gender1,setgender1]=useState("");
let[pronoun1,setpronoun1]=useState("");
let[optional,setoptional1]=useState("");
let[custom,setcustom]=useState(false);
let[check,setcheck]=useState(false);
let[check1,setcheck1]=useState(false);
let[check11,setcheck11]=useState(false);
let[check12,setcheck12]=useState(false);
let[pass,setpass]=useState(false);
let[correct,setcorrect]=useState(false);
let[product,setproduct]=useState((JSON.parse(localStorage.getItem('user')) || []));

let c=useNavigate();


let open=()=>{
setpass(!pass);
}






let change=(e)=>{

if(e.target.name=="username")
{

setfirstname1(e.target.value)

let s=state.users.find((val,index)=>{

  return e.target.value==val.firstname
})

if(s)
{
setcheck11(true);
}
else{
  setcheck11(false);
}


}
else if(e.target.name=="usersurname")
{

setsurname1(e.target.value) 

}
else if(e.target.name=="moe")
{

  setpoe1(e.target.value)
e.target.value.length >10? setcheck1(true):setcheck1(false);

let s=state.users.find((val,index)=>{

  return e.target.value==val.phonenumber
})

if(s)
{
setcheck12(true);
}
else{
  setcheck12(false);
}


}
else if(e.target.name=="pass")
{
  setpassword1(e.target.value)
}
else if(e.target.name=="day")
{
setday1(e.target.value)
}
else if(e.target.name=="month")
{
  setmonth1(e.target.value)
}
else if(e.target.name=="year")
{
setyear1(e.target.value)
}
else if(e.target.name=="gender")
{
  setgender1(e.target.value)
  let a=Math.floor(Math.random() * 200) + 100;
  setnumber(a);
}
else if(e.target.name=="pro")
{
setpronoun1(e.target.value)
}

else if(e.target.name=="optional")
{
setoptional1(e.target.value);
}

setdob1(`${day1}-${month1}-${year1}`);
setfullname1(`${firstname1}${surname1}`);

}



useEffect(()=>{
 if(gender1=="Custom")
{
setcustom(true);
}
else if(gender1=="male")
{
  setcustom(false);
}
else if(gender1=="Female")
{
  setcustom(false);

}
},[custom,gender1])





let submit=(e)=>{
  e.preventDefault();


if(firstname1==""||surname1==""||day1==0||month1==0||year1==0||poe1==""||password1==""||gender1=="")
{
  setcheck(true);
}


else{


  let object={

    firstname:firstname1,
    surname:surname1,
    phonenumber:poe1,
    password:password1,
    gender:gender1,
    dob:dob1,
    id:number,
    posts:[],
    profile:"",
    friends:[]
    
    }
    c("/");
    console.log(object);
    setproduct([...product,object])
    dispatch({type:"users",payload:[...state.users,object]});
    localStorage.setItem('user',JSON.stringify([...product,object]));
    
    setfirstname1("");
    setsurname1("");
    setday1(0);
    setyear1(0);
    setmonth1(0);
    setpoe1(0);
    setpassword1("");
    setgender1("");
    setpronoun1("");
    


}





}




console.log("firstname",firstname1);
console.log("surname",surname1);
console.log("fullname1",fullname1);
console.log("e",poe1);
console.log("pass",password1);
console.log("dob",dob1);
console.log("gender",gender1);
console.log("pro",pronoun1);
console.log("opi",optional);
console.log(custom);
console.log("number",number);
console.log("pro",product);
console.log("state",state.users);
return(
    <div>

    <div className="container1">
    <div className="box">
      
      <div className="signup">
        <div className="heading">Sign Up</div>
        <div className="info">It's quick and easy.</div>      
      </div>




      <div className="form">

        <form>

        <TextField type="text" name="username" value={firstname1} size="small" placeholder="First name"  onChange={change}  className={firstname1==""&&check?"textc":"text"} color={firstname1==""&&check?"warning":""} />        
        <TextField type="text" name="usersurname"  size="small" value={surname1} placeholder="Surname"  onChange={change} className={surname1==""&&check?"textc":"text1"} color={surname1==""&&check?"warning":""} />
        {firstname1==""&&check?<p className="textcolor">Please enter your firstname</p>:""}
        {surname1==""&&check?<span className="textcolor1">Please enter your surname</span>:""}
        {check11?<span className="textcolor1">already exist username</span>:""}
        
   
       
        <TextField type="text" name="moe"  size="small" onChange={change} value={poe1} placeholder="Mobile number or email address" className={poe1==""&&check?"textp":"text2"} color={poe1==""&&check?"warning":""}/>
        {poe1==""&&check?<p className="textcolor">Please enter your phone number or Email</p>:""}
        {poe1>10&&check1?<p className="textcolor">Please check your Mobile number</p>:""}
        {check12?<span className="textcolor1">already exist phonenumber</span>:""}

        <TextField type={pass?"text":"password"} name="pass"  size="small"value={password1} onChange={change} placeholder="New password" className={password1==""&&check?"textp":"text2"} color={password1==""&&check?"warning":""}/>
        {pass?<span className="password" onClick={open}><FaEye /></span>:<span className="password" onClick={open}><FaEyeSlash/></span>}
        {password1==""&&check?<p className="textcolor">Please enter your password</p>:""}



         <div className="day">
         <div className="birthday">Date of birth <span><FaQuestionCircle/></span></div>
         <div className="day1">
         
        
        <Select   name="day" className={day1==""&&check?"dobd":"dob"} color={poe1==""&&check?"warning":""} value={day1} onChange={change} size="small">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
        </Select>

        <Select  name="month" value={month1} className={month1==""&&check?"doby":"dob1"}  color={poe1==""&&check?"warning":""}onChange={change} size="small">
        <MenuItem value={1}>Jan</MenuItem>
        <MenuItem value={2}>Feb</MenuItem>
        <MenuItem value={3}>Mar</MenuItem>
        <MenuItem value={4}>Apr</MenuItem>
        <MenuItem value={5}>May</MenuItem>
        <MenuItem value={6}>June</MenuItem>
        <MenuItem value={7}>July</MenuItem>
        <MenuItem value={8}>Aug</MenuItem>
        <MenuItem value={9}>Sep</MenuItem>
        <MenuItem value={10}>Oct</MenuItem>
        <MenuItem value={11}>Nov</MenuItem>
        <MenuItem value={12}>Des</MenuItem>
        </Select>
     
        <Select   name="year" value={year1} className={year1==""&&check?"doby":"dob1"} color={poe1==""&&check?"warning":""}onChange={change} size="small">

        <MenuItem value={2023}>2023</MenuItem>
        <MenuItem value={2022}>2022</MenuItem>
        <MenuItem value={2021}>2021</MenuItem>
        <MenuItem value={2020}>2020</MenuItem>
        <MenuItem value={2019}>2019</MenuItem>
        <MenuItem value={2018}>2018</MenuItem>
        <MenuItem value={2017}>2017</MenuItem>
        <MenuItem value={2016}>2016</MenuItem>
        <MenuItem value={2015}>2015</MenuItem>
        <MenuItem value={2014}>2014</MenuItem>
        <MenuItem value={2013}>2013</MenuItem>
        <MenuItem value={2012}>2012</MenuItem>
        <MenuItem value={2011}>2011</MenuItem>
        <MenuItem value={2010}>2010</MenuItem>
        <MenuItem value={2009}>2009</MenuItem>
        <MenuItem value={2008}>2008</MenuItem>
        <MenuItem value={2007}>2007</MenuItem>
        <MenuItem value={2006}>2006</MenuItem>
        <MenuItem value={2005}>2005</MenuItem>
        <MenuItem value={2004}>2004</MenuItem>
        <MenuItem value={2003}>2003</MenuItem>
        <MenuItem value={2002}>2002</MenuItem>
        <MenuItem value={2001}>2001</MenuItem>
        <MenuItem value={2000}>2000</MenuItem>
        <MenuItem value={1999}>1999</MenuItem>
        <MenuItem value={1998}>1998</MenuItem>
        <MenuItem value={1997}>1997</MenuItem>
        <MenuItem value={1996}>1996</MenuItem>
        <MenuItem value={1995}>1995</MenuItem>
        <MenuItem value={1994}>1994</MenuItem>
        <MenuItem value={1993}>1993</MenuItem>
        <MenuItem value={1992}>1992</MenuItem>
        <MenuItem value={1991}>1991</MenuItem>
        <MenuItem value={1990}>1990</MenuItem>
        <MenuItem value={1989}>1989</MenuItem>
        <MenuItem value={1988}>1988</MenuItem>
        <MenuItem value={1987}>1987</MenuItem>
        <MenuItem value={1986}>1986</MenuItem>  
        <MenuItem value={1985}>1985</MenuItem>
        <MenuItem value={1984}>1984</MenuItem>
        <MenuItem value={1983}>1983</MenuItem>
        <MenuItem value={1982}>1982</MenuItem>
        <MenuItem value={1981}>1981</MenuItem>
        <MenuItem value={1980}>1980</MenuItem>
        <MenuItem value={1979}>1979</MenuItem>
        <MenuItem value={1978}>1978</MenuItem>
        <MenuItem value={1977}>1977</MenuItem>
        <MenuItem value={1976}>1976</MenuItem>
        <MenuItem value={1975}>1975</MenuItem>
        <MenuItem value={1974}>1974</MenuItem>
        <MenuItem value={1973}>1973</MenuItem>
        <MenuItem value={1972}>1972</MenuItem>
        <MenuItem value={1971}>1971</MenuItem>
        <MenuItem value={1970}>1970</MenuItem>
        <MenuItem value={1969}>1969</MenuItem>
        <MenuItem value={1968}>1968</MenuItem>
        <MenuItem value={1967}>1967</MenuItem>
        <MenuItem value={1966}>1966</MenuItem>
        <MenuItem value={1965}>1965</MenuItem>
        <MenuItem value={1964}>1964</MenuItem>
        <MenuItem value={1963}>1963</MenuItem>
        <MenuItem value={1962}>1962</MenuItem>
        <MenuItem value={1961}>1961</MenuItem>
        <MenuItem value={1960}>1960</MenuItem>
        <MenuItem value={1959}>1959</MenuItem>
        <MenuItem value={1958}>1958</MenuItem>
        <MenuItem value={1957}>1957</MenuItem>
        <MenuItem value={1956}>1956</MenuItem>
        <MenuItem value={1955}>1955</MenuItem>
        <MenuItem value={1954}>1954</MenuItem>
        <MenuItem value={1953}>1953</MenuItem>
        <MenuItem value={1952}>1952</MenuItem>
        <MenuItem value={1951}>1951</MenuItem>
        <MenuItem value={1950}>1950</MenuItem>
        </Select>
         </div>
         </div>

         <div className="radiobtn">
          <div className="content">Gender<span><FaQuestionCircle/></span></div>
          <div className="gender">


            <div className={gender1==""&&check?"gender2":"Female"}>
              <label>Female</label>
              <input type="radio" name="gender"  onChange={change} value={"Female"} />
            </div>
            <div className={gender1==""&&check?"gender1":"Male"}>
              <label>Male</label>
              <input type="radio" name="gender"onChange={change} value={"male"} />
            </div>

            <div className={gender1==""&&check?"gender1":"Custom"}>
              <label>Custom</label>
              <input type="radio" name="gender" onChange={change} value={"Custom"} />
            </div>
          </div>

         </div>
         
    {custom? <div className="custom">
         <Select  className={pronoun1==""&&check?"pronoun1":"pronoun"} color={pronoun1==""&&check?"warning":""} name="pro" onChange={change}  size="small">
        <MenuItem value="">
          <em>Select your pronoun</em>
        </MenuItem>
        <MenuItem value={"she"}>She: "Wish her a happy birthday!"</MenuItem>
        <MenuItem value={"he"}>He: "Wish him a happy birthday!"</MenuItem>
        <MenuItem value={"they"}>They: "Wish them a happy birthday!"</MenuItem>
      </Select>

      <div className="caption">Your pronoun is visible to everyone.</div>

      <TextField type="text"  size="small" name="optional"  placeholder="Gender (optional)" onChange={change} className="option"/>
         </div>:""}
      


         <div className="learn">
          <p>People who use our service may have uploaded your contact information to Facebook.
            <a href="#">Learn more.</a>
          </p>
         </div>
         <div className="terms">
          <p>By clicking Sign Up, you agree to our <a href="#"> Terms,</a> <a href="#"> Privacy Policy </a> and <a href="#"> Cookies Policy.</a> 
            You may receive SMS notifications from us and can opt out at any time.
          </p>
         </div>
        
        <div className="button">
           <button className="sign" onClick={submit}>Sign up</button>
        </div>
     
 
        </form>

      </div>






    </div>
    </div>
    </div>

)



}
export default Register;
