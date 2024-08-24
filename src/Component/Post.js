import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { RxCross1 } from "react-icons/rx";
import frd from "./Image/frd.jpg";
import { BiWorld } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsEmojiSmile } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import Smile from "./Image/smile.png";
import Photo from "./Image/photo.png";
import Gif from "./Image/gif.png";
import Contact from "./Image/contact.png";
import Location from "./Image/location.png";



const Post=()=>{

let{state,dispatch}=useContext(Context);
let x=useNavigate();

let[caption1,setcaption1]=useState("");
let[file,setfile]=useState();
let[file1,setfile1]=useState();
let[check,setcheck]=useState(false);
let[number,setnumber]=useState(0);
let[date,setdate]=useState("");
let[month,setmonth]=useState("");
let[year,setyear]=useState("");
let[day,setday]=useState();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



useEffect(()=>{

    const d = new Date();
    setyear(d.getFullYear());
    setdate(d.getDate());
    setmonth(months[d.getMonth()]);
    setday(`${date} ${month} ${year}`);
    setnumber(`${date}${d.getMinutes()}${d.getSeconds()}`)

},[day,number])


let postpages=()=>{

    dispatch({type:"post",payload:false}); 
    x("/");
}

let change=(e)=>{

    if(e.target.name== "file")
    {
        
        setfile(URL.createObjectURL(e.target.files[0]));

        setfile1(e.target.files[0].type);

    }
    else if(e.target.name=="area")
    {
        setcaption1(e.target.value);
    }

}



let submit=(e)=>{
e.preventDefault();

if(caption1==""||file=="")
{
    setcheck(true);
}
else{
     let createpost={

        firstname:state.detail.firstname,
        surname:state.detail.surname,
        profile:state.detail.profile,
        image:file,
        date:day,
        id:number,
        uid:state.detail.id,
        caption:caption1,
        like:false,
        comment:false,
        likecount:0,
        commentcount:0,
        comments:[],
        type:file1,
     }

     let a={

        firstname:state.detail.firstname,
        surname:state.detail.surname,
        profile:state.detail.profile,
        image:file,
        date:day,
        id:number,
        uid:state.detail.id,
        caption:caption1,
        like:false,
        comment:false,
        likecount:0,
        commentcount:0,
        comments:[]
     }


     dispatch({type:"post",payload:false}); 
     x("/");
     dispatch({type:"createpost",payload:([...state.createpost,createpost])});

     let c=state.users.map((val,index)=>{
        return state.detail.id==val.id?{...val,posts:[...val.posts,a]}:val
     })
     
     dispatch({type:"users",payload:c});
     localStorage.setItem('user',JSON.stringify(c));

     let d={
      
        firstname:state.detail.firstname,
        surname:state.detail.surname,
        phonenumber:state.detail.phonenumber,
        password:state.detail.password,
        gender:state.detail.gender,
        dob:state.detail.dob,
        id:state.detail.id,
        posts:[...state.detail.posts,a],
        profile:state.detail.profile,
        friends:state.detail.friends
  
       }
     
     dispatch({type:"detail",payload:d});

}
console.log(file);
console.log(file1);

}




return(


<div>

    <div className="postpage">
  <div className="postpage-inner">

<div>
<div className="create-post">

    <div className="create-post-inner">
    <h2 >Create post</h2>
    </div>    
    
     <div className="cancel" onClick={postpages}>
        <span><RxCross1 /></span>
     </div>
    
</div>

<div className="post-profile">
        <span className="avatar">
        <Avatar  src={state.detail.profile}  sx={{ width: 40, height: 40 }}/>
        </span>
        <div className="detail">
            <div className="name">
                <span>{state.detail.firstname}</span>
            </div>
            <div className="public1">
            <div className="public">
                <div className="pub">
                    <span className="icon"><BiWorld /></span>
                    <span>Public</span>
                    <span className="icon"><TiArrowSortedDown /></span>
                </div>
             </div>

            </div>
             
        </div>

</div>
</div>


<div className="add">
    
<div className="addinner">

<div className="caption">
    <div className="name">
        <textarea  rows="10" cols="10" className="p" value={caption1} name="area" placeholder={`What's on your mind, ${state.detail.firstname}`} onChange={change}></textarea>
        {caption1===""&&check? "":""}
    </div>
    <div className="icon"><BsEmojiSmile /></div>
</div>

<div className="post">
    <div className="post-inner">
        <div className="box">
            <div className="box-inner">
            <div className="box1">
                <div className="box1-inner">                  
                    <div className="part1">
                    <div className="box-part1">                  
                    <label for="input"><i></i></label>
                    <input multiple type="file"  id="input" name="file"  onChange={change}/>
                    {file===""&&check? "":""} 
                </div>
                 </div>
                
                <div className="box-part2">
                    <span>Add photos/videos</span>
                </div>
                <div className="box-part3">
                <span>or drag and drop</span>
                </div>
                    
                </div>
            </div>
            </div>
        </div>
    </div>
</div>



</div>   
</div>
    

<div className="end">
        <div className="firstend">
              <div className="addpost">
                <span>Add to your post</span>
              </div>
              <div className="card">
                <div className="card-design">
                <Tooltip title="Photo/video" >
                    <div className="design-inner">
                    <img src={Photo} alt="icon"/>
                    </div>  
                </Tooltip>             
                </div>
                <div className="card-design">
                <Tooltip title="Tag people" >
                    <div className="design-inner">
                    <img src={Contact} alt="icon"/>
                    </div> 
                </Tooltip>            
                </div>
                <div className="card-design">
                <Tooltip title="Feeling/activity" >
                <div className="design-inner">
                <img src={Smile} alt="icon"/>
                </div>
                </Tooltip> 
                </div>
                <div className="card-design">
                <Tooltip title="Check in" >
                <div className="design-inner">
                <img src={Location} alt="icon"/>
                </div> 
                </Tooltip>                
                </div>
                <div className="card-design">
                <Tooltip title="Gif" >
                <div className="design-inner">
                <img src={Gif} alt="icon"/>
                </div>  
                </Tooltip>               
                </div>
                <div className="card-design">
                <Tooltip title="More" >
                <div className="design-inner">
                <span><BsThreeDots /></span>
                </div> 
                </Tooltip>                    
                </div>

              </div>

        </div>
        <div className="lastend" >
           <div className={check?"lastend-inner":"end-inner"}      onClick={submit}>
            <span>Post</span>
            </div> 
        </div>

    </div>

</div>

</div>

</div>



)


}
export default Post;
