import React from "react";
import { IoIosSettings } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserPen } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import Contact from "./Image/contact1.png";
import frd from "./Image/frd.jpg";
import { FaSearch } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import { useContext } from "react";
import {Context} from "./Context";



let  Friends=()=>{

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

    let{state,dispatch}=useContext(Context);
return(
    <div>
     
<div className="friends">
<div className="friends-inner">
<div className="frd-1">
<div className="frd-1-inner">
<div className="heading">

<div className="head">

<span><h1>Friends</h1></span>
                        
</div>

<div className="icon">

<span><IoIosSettings /></span>

</div>

</div>

<div className="content">
<div className="content-1">
<div className="content-1-inner">

 <div className="icon">
<span><BsFillPeopleFill /></span>
</div>
<div className="head">
<span>Home</span>
</div>   

</div>
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><FaUserPen /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Friend requests</span></div>
 <div className="icon">
 <span><FaChevronRight /></span>  
 </div>
 
</div>

</div>    
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><FaUserPlus /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Suggestions</span></div>
 <div className="icon">
 <span><FaChevronRight /></span>  
 </div>
 
</div>

</div>    
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><FaUserCog /></span>    
</div>

<div className="head-1">
 <div className="head"><span>All Friends</span></div>
 <div className="icon">
 <span><FaChevronRight /></span>  
 </div>
 
</div>

</div>    
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><FaGift /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Birthdays</span></div> 
</div>

</div>    
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><FaUserCog /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Custom lists</span></div>
 <div className="icon">
 <span><FaChevronRight /></span>  
 </div>
 
</div>

</div>    
</div>


</div>   
                
</div>
</div>

<div className="frd-2">
<div className="frd-2-inner">

<div className="first">
  <div className="heading">
    <h1>Friends</h1>
  </div>
  <div className="icon"><span><FaSearch /></span></div>  
</div>

<div className="first-1">

  <div className="heading1">
    <span>Suggestions</span>
  </div>

  <div className="heading2">
    <span>Your friends</span>
  </div>

</div>  

 <div className="heading">
  <div className="heading-inner">
    <div className="head1"><span>Friend requests</span></div>
    <div className="head2"><span>See all</span></div>
 </div>  
 </div>

 <div className="multiplecard">

  <div className="multiplecard-inner">

{state.friendpost.map((val,index)=>{
    return    <div className="card" key={index}>
    <div className="card-inner">
 
    <div className="card-1">
 
    <div className="image">
         <img src={val.image} alt="friends"/>
     </div>
     <div className="detail">
     <div className="name"><span className="name1">{val.name}</span></div>
     <div className="detail1">Request cancelled</div>
     <div className="btn1">
     <div className="btn">
 
       <span>Add friend</span>
 
     </div>
     </div>
     <div className="btn2">
     <div className="btn">
     <span>Remove</span>
     </div>
     </div>
     </div>
  
 
    </div>
 
 
 
   </div> 
   </div>
})} 


  </div>  

 </div>



</div>
</div>

<div className="frd-3">
<div className="frd-3-inner">

<div className="first">
  <div className="heading">
    <h1>Friends</h1>
  </div>
  <div className="icon"><span><FaSearch /></span></div>  
</div>

<div className="first-1">

  <div className="heading1">
    <span>Suggestions</span>
  </div>

  <div className="heading2">
    <span>Your Friends</span>
  </div>

</div>

<div className="second">
  <div className="head">
   <h1>Friend requests</h1>
  </div>

  <div className="head1">
    <span>See all</span>
  </div>


</div>

<div className="third">
<div className="third-inner">

  {state.friendpost.map((val,index)=>{

    return   <div className="card" key={index}>

    <div className="image">
    <Avatar src={val.image}  sx={{ width: 100, height: 100 }}/>
    </div>
 
    <div className="detail">
 
    <div className="name">{val.name}</div>
    <div className="btn">
 
     <div className="btn1">
       <span>Add friend</span>
     </div>
      <div className="btn2">
       <span>Remove</span>
      </div>
     
   </div>  
 
   </div> 
 
   </div>
  })}



</div> 
</div>


</div> 
</div>



</div>
</div>

</div>
)



} 

export default Friends;
