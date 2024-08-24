import React, { useEffect, useState } from "react"
import { BrowserRouter , Routes,Route,Link,NavLink} from "react-router-dom"
import { Context } from "./Context"
import {State,change} from "./Reduce"
import { useReducer } from "react"
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Friends from "./Friends";
import Video from"./Video";
import Groups from "./Groups";
import Marketplace from "./Marketplace"
import Post from "./Post";
import { IoMdCamera } from "react-icons/io";



import  facebook from "./Image/Facebook.png";
import face from "./Image/face.png"
import frd from "./Image/frd.jpg";
import Icon1 from"./Image/ficon/icon1.png";
import Icon2 from"./Image/ficon/icon2.png";
import Icon3 from"./Image/ficon/icon3.png";
import Icon4 from"./Image/ficon/icon4.png";
import Icon5 from"./Image/ficon/icon5.png";
import Icon6 from"./Image/ficon/icon6.png";
import Icon7 from "./Image/ficon/icon7.png";
import Icon8 from "./Image/ficon/icon8.png";
import Icon9 from "./Image/ficon/icon9.png";
import Icon10 from "./Image/ficon/icon10.png";
import Icon11 from "./Image/ficon/icon11.png";
import Icon12 from "./Image/ficon/icon12.png";
import Icon13 from "./Image/ficon/icon13.png";
import Icon14 from "./Image/ficon/icon14.png";
import { IoIosSearch } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { RxVideo } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuArchive } from "react-icons/lu";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { IoIosSettings } from "react-icons/io";
import { MdNightlight } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";




let Router=()=>{

let[state,dispatch]=useReducer(change,State);
let[login,setlogin]=useState(false);
let[bar,setbar]=useState(false);
let[rotate,setrotate]=useState(false);
let[search, setsearch]=useState(false);
let[data,setdata]=useState([]);
let[value,setvalue]=useState("");
let[file,setfile]=useState();



let frds=[{"name":"Siva"},
{"name":"Jayanthan"},
{"name":"Mani"},
{"name":"Selvi"},
{"name":"Ganesh"},
{"name":"Senthil"},
{"name":"Guna"},
{"name":"George"},
{"name":"Selvam"},
{"name":"Vikram"},
{"name":"ravi"},
{"name":"Ganesh"},
{"name":"Senthil"},
{"name":"Guna"},
{"name":"George"},]



rotate?document.body.style.overflow="hidden":document.body.style.overflow="auto";





let navigate=()=>{

  setbar(false);
  setrotate(false);
}



let filter=(v)=>{

  setvalue(v);
  const a=state.users.filter(j=>j.firstname.toLowerCase().includes(v));
  setdata(a);
  if(v===""){
    setdata([]);
  }

}

let change1=(e)=>{

  if(e.target.name=="file")
  {
      setfile(URL.createObjectURL(e.target.files[0]));


      // let s=state.users.map((val,index)=>{
      //   return val.id==state.detail.id? {...val,profile:URL.createObjectURL(e.target.files[0])}:val
      // })
      
      // console.log("ss",s);
      // dispatch({type:"users",payload:s});
      // localStorage.setItem('user',JSON.stringify(s)); 



      let c=state.users.map((val,index)=>{
        return state.detail.id==val.id? {...val,profile:URL.createObjectURL(e.target.files[0]),posts:val.posts.map((v,s)=>{
            return val.firstname==v.firstname? {...v,profile:URL.createObjectURL(e.target.files[0])}:v

        })}:val
    })

let b=state.randompost.map((val,index)=>{
  return val.uid==state.detail.id? {...val,profile:URL.createObjectURL(e.target.files[0])}:val
})

dispatch({type:"random",payload:b})

    //  let b={
      
    //   firstname:state.detail.firstname,
    //   surname:state.detail.surname,
    //   phonenumber:state.detail.phonenumber,
    //   password:state.detail.password,
    //   gender:state.detail.gender,
    //   dob:state.detail.dob,
    //   id:state.detail.id,
    //   posts:state.detail.posts,
    //   profile:URL.createObjectURL(e.target.files[0])

    //  }

  

      // dispatch({type:"detail",payload:b});
      dispatch({type:"users",payload:c});    
      localStorage.setItem('user',JSON.stringify(c));

      let d=c.find((val,index)=>{
        return state.detail.id==val.id
      })

      console.log("dd",d);
      dispatch({type:"detail",payload:d});
  }





}



let Accounts=()=>{

  setlogin(!login);

}

let searchname=()=>{

  setsearch(!search);
}

let Account=()=>{

  setbar(true);
  setrotate(true);
}

let Account1=()=>{

  setbar(false);
  setrotate(false);
}


let logout=()=>{
  dispatch({type:"correct",payload:false}); 
  setlogin(false); 
  setbar(false);
}

console.log(state.users);

return(



<Context.Provider        value={{state,dispatch}}>      
<BrowserRouter>

{/* <Routes>
  <Route path="/Post" element={<Post/>}></Route>
</Routes> */}


{state.login?
<div>

<div>
<div className={state.post?"nav-bar":"navbar1"}>
<div className="navbar1-inner">
<div className="part1">

<div className="logo">
<img src={face} alt="logo"/>
</div>  
<div className="icons">


<ul className="arrange1">

<Tooltip title="Home"> <li className="home"><a ><NavLink to="/"><FiHome /></NavLink></a> </li></Tooltip>    
<Tooltip title="Friends"> <li><a  ><NavLink to="/Friends"><GoPeople /></NavLink></a></li> </Tooltip>       
<Tooltip title="Video"> <li><a ><NavLink to="Video"><RxVideo /></NavLink></a></li></Tooltip>  
<Tooltip title="Marketplace"> <li><a  ><NavLink to="Marketplace"><LuArchive /></NavLink></a></li></Tooltip>  
<Tooltip title="Group"> <li><a><GoBell /></a></li> </Tooltip>  
</ul>


</div>

<div className="bar" onClick={Account}>
<div className="bar1">
<span><FaBars /></span>
</div>  
 </div>

</div>
</div>
</div>


{bar?
<div>
<div className="profile1">
<div className="profile1-inner">

<div className="menu">
  <div onClick={Account1} className="back">
  <FaArrowLeftLong />
  </div>

  <div className="back1">
<h1>Menu</h1>
  </div>
</div> 

<div className="profile2">
  <div className="avatar">
  <Avatar src={state.detail.profile}   sx={{ width: 50, height: 50 }}/>
  </div>
   <div className="name">
     <p>{state.detail.firstname}&nbsp;{state.detail.surname}</p>
   </div>

</div>
<label for="input"><i><IoMdCamera /></i></label>
<input type="file"  id="input" name="file" value={""} onChange={change1} />
<div className="another">
  <div className="icon">
    <div className="plus">
    <FaPlusCircle />
    </div>

  </div>
<div className="text">
  <p>Create another profile</p>
</div>

</div>


<div className="box">

<div className="box1">
<img src={Icon1} alt="icons"/> <br/>
<a href="#">Reels</a>
</div>


<div className="box1" >
 <img src={Icon2} alt="icons"/> <br/>
<a href="#">Messages</a>
</div>
<div className="box1"  onClick={navigate}>
 <img src={Icon3} alt="icons"/> <br/>
<a><Link to="/Groups">Groups</Link></a>
</div>


<div className="box1"  onClick={navigate}>
 <img src={Icon4} alt="icons"/> <br/>
<a><Link to="/Friends">Friends</Link></a>
</div>

<div className="box1"  onClick={navigate}>
 <img src={Icon5} alt="icons"/> <br/>
<a><Link to="/Videos">Videos</Link></a>
</div>

<div className="box1"onClick={navigate} >
 <img src={Icon6} alt="icons"/> <br/>
<a ><Link to="/Marketplace"></Link>Marketplace</a>
</div>

<div className="box1">
 <img src={Icon7} alt="icons"/> <br/>
<a href="#">Pages</a>
</div>


<div className="box1">
 <img src={Icon8} alt="icons"/> <br/>
<a href="#">Saved</a>
</div>


<div className="box1">
 <img src={Icon9} alt="icons"/> <br/>
<a href="#">Memories</a>
</div>


<div className="box1">
 <img src={Icon10} alt="icons"/> <br/>
<a href="#">Events</a>
</div>


<div className="box1">
 <img src={Icon11} alt="icons"/> <br/>
<a href="#">Games</a>
</div>

<div className="box1">
 <img src={Icon12} alt="icons"/> <br/>
<a href="#">Fantasy games</a>
</div>

<div className="box1">
 <img src={Icon13} alt="icons"/> <br/>
<a href="#">Ads Manager</a>
</div>

<div className="box1">
 <img src={Icon14} alt="icons"/> <br/>
<a href="#">Feeds</a>
</div>



</div>

<div className="horizantal">
<hr/>
</div>

<div className="tab">

        <div className="setting">
            <div className="set1">
            <IoIosSettings />
            </div>

            <div className="set2">
              <a href="#"> Setting </a>
            </div> 

            <div className="set3">
            <FaChevronRight />
            </div>

          </div>  
     
     <div className="horizantal1"> 
          <hr/>
    </div>

        
        <div className="setting">

            <div className="set1">
            <FaQuestionCircle />
            </div>

            <div className="set2">
            <a href="#"> Help & support</a>
            </div> 

        </div>

        <div className="horizantal1"> 
          <hr/>
        </div>


        <div className="setting">
            <div className="set1">
            <LuLogOut />
            </div>
            <div className="set2">
            <a href="#" onClick={logout}> Log out</a>
            </div>
          </div>  

  
</div>

</div>

</div>
</div>:""}



</div> 

<div>
  <div className={state.post?"nav-bar":"nav"}>
<div className="navbar">
    <div className="logo">
    <img src={facebook} alt="logo" width="40px" height="40px"/>
   </div>

{search? <div >

<div className="search-1">
<div className="head">
 <div className="icon"onClick={searchname}><span><FaArrowLeft /></span></div> 
 <label className="search">
<span><IoIosSearch /></span>
<input type="text"  className="text" placeholder="Search Facebook" onChange={e=>filter(e.target.value)} />
</label>
</div>

{value===""? <div className="content1">

<div className="name">
No recent searches
</div>
  
</div>
:""}



<div className="content">
{data.map((val,index)=>{
  return <div key={index} className="name">
       {val.firstname}
  </div>
})}
  
</div>

</div>
</div>
:"" }

<label className="search">
<span><IoIosSearch /></span>
<input type="text"  className="text" placeholder="Search Facebook" onClick={searchname}/>
</label>

   
    <div className="icons">
      <ul className="arrange">

      <Tooltip title="Home"> <li className="home"><a ><NavLink to="/"><FiHome /></NavLink></a> </li></Tooltip>    
      <Tooltip title="Friends"> <li><a  ><NavLink to="/Friends"><GoPeople /></NavLink></a></li> </Tooltip>       
      <Tooltip title="Video"> <li><a ><NavLink to="Video"><RxVideo /></NavLink></a></li></Tooltip>  
      <Tooltip title="Marketplace"> <li><a  ><NavLink to="Marketplace"><LuArchive /></NavLink></a></li></Tooltip>  
      <Tooltip title="Group"> <li><a  ><NavLink to="Groups"><HiOutlineUserGroup /></NavLink></a></li> </Tooltip>  
      </ul>
    </div>
 
 
    <div className="profile"> 
    <Tooltip title="Account"><span onClick={Accounts}> <Avatar src={state.detail.profile}  /></span>  </Tooltip>
    </div>
  
  <div>
  </div>
    {login?
      <div className="Account">
      
      <div className="avatar">
      
      <div className="part">
        <div className="part1">
          <div className="picture" >
          <Avatar src={state.detail.profile} sx={{ width: 50, height: 50 }} />
            </div>          
        
        <div className="name">
          <h4>{state.detail.firstname}</h4>
          </div>
          
        </div>
        <label for="input"><i><IoMdCamera /></i></label>
        <input type="file"  id="input" name="file" value={""} onChange={change1} />
      <hr className="line"/>

      <div className="link">
       <a href="#"> See all profiles</a>
      </div>
      </div>
        </div>

        <div className="set">
          <div className="setting">
            <div className="set1">
            <IoIosSettings />
            </div>

            <div className="set2">
              <a href="#"> Setting & privacy</a>
            </div> 

            <div className="set3">
            <FaChevronRight />
            </div>

          </div>  

          <div className="setting">
            <div className="set1">
            <MdNightlight />
            </div>

            <div className="set2">
            <a href="#"> Display </a>
            </div> 

           

          </div>  


          <div className="setting">
            <div className="set1">
            <FaQuestionCircle />
            </div>

            <div className="set2">
            <a href="#"> Help & support</a>
            </div> 

            

          </div>  


          <div className="setting">
            <div className="set1">
            <LuLogOut />
            </div>
            <div className="set2">
            <a href="#" onClick={logout}> Log out</a>
            </div>
          </div>  
        </div>     
      </div>:""}
  </div>

</div>

</div>


<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/Friends" element={<Friends/>}></Route>
<Route path="/Video" element={<Video/>}></Route>
<Route path="/Marketplace" element={<Marketplace/>}></Route>
<Route path="/Groups" element={<Groups/>}></Route>
<Route path="/Post" element={<Post/>}></Route>
</Routes>

</div>
:<Routes>
<Route path="/"  element={<Login/>}></Route>
<Route path="/Register"  element={<Register/>}></Route>

</Routes>}

</BrowserRouter>
</Context.Provider>


)





}
export default Router;