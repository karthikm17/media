import React from "react";
import { IoIosSettings } from "react-icons/io";
import { FiArchive } from "react-icons/fi";
import { TbBellRinging2Filled } from "react-icons/tb";
import { FaInbox } from "react-icons/fa6";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import {Context} from "./Context";


let  Marketplace=()=>{


let Product = [
  {
    "img":"https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-6/415996651_3534352990213247_8111504627328513332_n.jpg?stp=c0.79.720.720a_dst-jpg_s261x260&_nc_cat=103&ccb=1-7&_nc_sid=6b907e&_nc_ohc=xQu9pRGNCRoAX9Cr41H&_nc_ht=scontent.fmaa12-1.fna&oh=00_AfCDGQoF0lssk7TVN2dKvqgL3jEx6rP9OxMF8hkXibADaw&oe=65C78004",
    "price":45000,
    "place":"Neyveli, TN"
  },
  {
    "img":"https://scontent.fmaa12-3.fna.fbcdn.net/v/t45.5328-4/426467702_7205903826141476_7974353279274962535_n.jpg?stp=c158.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=ieBf4RVpP3QAX-_-g0z&_nc_ht=scontent.fmaa12-3.fna&oh=00_AfCCquk86QAgnZa6hKkgZy3szU0B55SiXa--cuOOIvU7UA&oe=65C8E61C",
    "price":33000,
    "place":"Villupuram"
  },
  {
    "img":"https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-6/406401850_3043958385740524_1601616167119411846_n.jpg?stp=c101.0.260.260a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=6b907e&_nc_ohc=46hfRjXmVHQAX-WUbSV&_nc_ht=scontent.fmaa12-1.fna&oh=00_AfAFzO9a6kimcf7r6k8iy1x2aOYdadIxicpRyQKc9eErJw&oe=65C812E4",
    "price":500000,
    "place":"Cheyyur ,TN"
  },
  {
    "img":"https://scontent.fmaa12-2.fna.fbcdn.net/v/t45.5328-4/423428671_25454603620805819_1816481193768898600_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=P21DZXM0xKsAX-Msbzk&_nc_ht=scontent.fmaa12-2.fna&oh=00_AfC2J5t8m8PCYkbFJJZ1a7_KXvizwmCKlWM-H7bz8h9f-A&oe=65C92C71",
    "price":5999,
    "place":"Tiruchengode, TN"
  },

  {
    "img":"https://scontent.fmaa12-1.fna.fbcdn.net/v/t45.5328-4/425746284_7362495790438422_2334632009249138417_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=z2jZDeXMnY0AX-pyRWR&_nc_oc=AQmSAb03qe_iWirAxCQdwnJY_ZAP_pj9UNfH8tTtS4Vb3tWk0sR8-KFmHa6Mub-mvyqCUcwCAclcu-lZofkgYY1G&_nc_ht=scontent.fmaa12-1.fna&oh=00_AfAC7IX9IDjT9qOSXZMTzYp0PswmsgcHc8QEFbA2rgbX1w&oe=65C88646",
    "price":10999,
    "place":"Chennai, TN"
  },
  {
    "img":"https://scontent.fmaa12-2.fna.fbcdn.net/v/t45.5328-4/423626520_7108254939253933_2715980686971346559_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=uzPnteI3NNgAX8_iopG&_nc_ht=scontent.fmaa12-2.fna&oh=00_AfBDmozStlERHh4H-nTdzmDcSGz3JcJINB82vLeHyCLcVQ&oe=65C956DE",
    "price":10500,
    "place":"Chennai, TN"
  },

]
let{state,dispatch}=useContext(Context);






return(
<div>
  
<div className="place">
<div className="place-inner">

<div className="place1">
<div className="place1-inner">

<div className="heading">

<div className="head">

<span><h1>Marketplace</h1></span>
                        
</div>

<div className="icon">

<span><IoIosSettings /></span>

</div>

</div>

<div className="content">
<div className="content-1">
<div className="content-1-inner">

 <div className="icon">
<span><FiArchive /></span>
</div>
<div className="head">
<span>Browse all</span>
</div>   

</div>
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><TbBellRinging2Filled /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Notifications</span></div> 
</div>

</div>    
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><FaInbox /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Inbox</span></div>
</div>

</div>    
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><BiSolidShoppingBag /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Buying</span></div>
 <div className="icon">
 <span><FaChevronRight /></span>  
 </div>
 
</div>

</div>    
</div>


<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><MdSell /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Selling</span></div>
 <div className="icon">
 <span><FaChevronRight /></span>  
 </div>
 
</div>

</div>    
</div>

<div className="newfield">
 <div className="newfield-inner">
  <div  className="field1">
    <div className="icon">
    <span><HiOutlinePlus /></span>
    </div>
  <span>Create new listing</span>
  </div>

</div> 
</div>

</div>          

</div>

</div>


<div className="place2">
<div className="place2-inner">

<div className="first">
  <div className="heading">
    <h1>Marketplace</h1>
  </div>
  <div className="icon"><span><FaSearch /></span></div>  
</div>

<div className="first-1">

  <div className="heading1">
    <span>Sell</span>
  </div>

  <div className="heading2">
    <span>Categories</span>
  </div>

</div>

<div className="part1">

<div className="heading">
 <span>Today's picks</span> 
</div>
<div className="location">
<i><MdLocationOn /></i>
<span>Villupuram</span>
</div>

</div>


<div className="multicard">

  
{state.placepost.map((val,index)=>{
  return <div className="card" key={index}>

  <div className="image">
    <img src={val.image}  alt="image"/>
  </div>
  <div className="detail">

    <div className="price">
     <span>&#8377;{val.price}</span>
    </div>

    <div className="desc">
     <span>{val.detail}</span>
    </div>

    <div className="place">
      <span>{val.place}</span>
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

)



} 

export default Marketplace;
