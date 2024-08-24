import React from "react";
import { useState ,useEffect} from "react";
import { Context } from "./Context";
import { useContext } from "react";
import { IoIosSettings } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { RiLiveFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaClapperboard } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import { BiWorld } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import like from "./Image/like.svg";
import frd from "./Image/frd.jpg";
import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { FaComment } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

import Video1 from "./Image/video/first.mp4";
import video2 from "./Image/video/second.mp4";
import video3 from "./Image/video/third.mp4";
import video4 from "./Image/video/four.mp4";
import video5 from "./Image/video/five.MP4";
import { FaSearch } from "react-icons/fa";



let  Video=()=>{

  let frds=[{"name":"Siva","video":Video1},
  {"name":"Jayanthan","video":video2},
  {"name":"Mani","video":video3},
  {"name":"Selvi","video":video4},
  {"name":"Ganesh","video":video5},]




  let{state,dispatch}=useContext(Context);

let [btn,setbtn]=useState(false);
let[btn1,setbtn1]=useState(false);
let[userid,setuserid]=useState();
let[userid1,setuserid1]=useState();
let[comment,setcomment]=useState("");
let[comments,setcomments]=useState([]);
let[check,setcheck]=useState(false);


// useEffect(()=>{

//   let s=state.users.map((val,index)=>{
//       return val.posts.filter(s=>s.type=="video/mp4")     
//     })
    
//     let show=[].concat(...s);

//     let random=[];
//     for(let i=0; i <=show.length; i++)
//       {

//        random.push(show[Math.floor(Math.random()*show.length)]);
      
//       }

//     dispatch({type:"video",payload:random});


// console.log("video",random)

// },[])



let changecomment=(e)=>{
  if(e.target.name="check"){
      setcomment(e.target.value);
  }
  

}


let count=(id,i)=>{


  let a=state.users.map((val,index)=>{
      return i==val.id? {...val,posts:val.posts.map((v,s)=>{
          return id==v.id? {...v,like:true,likecount:v.likecount+1}:v

      })}:val
  })

  dispatch({type:"users",payload:a}); 
  localStorage.setItem('user',JSON.stringify(a));

  let b=state.videopost.map((val,index)=>{
      return id==val.id?{...val,like:true,likecount:val.likecount+1}:val
  })

  dispatch({type:"video",payload:b})
}

let down=(id,i)=>{

  setuserid(id);
  setuserid1(i);

  let a=state.users.map((val,index)=>{
      return i==val.id? {...val,posts:val.posts.map((v,s)=>{
          return id==v.id? {...v,comment:!v.comment}:v

      })}:val
  })

  dispatch({type:"users",payload:a}); 
  localStorage.setItem('user',JSON.stringify(a));

  let b=state.videopost.map((val,index)=>{
      return id==val.id? {...val,comment:!val.comment}:val
  })

  dispatch({type:"video",payload:b})

}

let less=(id,i)=>{

  let a=state.users.map((val,index)=>{
      return i==val.id? {...val,posts:val.posts.map((v,s)=>{
          return id==v.id? {...v,like:false,likecount:v.likecount-1}:v

      })}:val
  })

  dispatch({type:"users",payload:a}); 
  localStorage.setItem('user',JSON.stringify(a));

  let b=state.videopost.map((val,index)=>{
      return id==val.id? {...val,like:false,likecount:val.likecount-1}:val
  })

  dispatch({type:"video",payload:b})


}


let onsubmit =(e) =>{

  e.preventDefault();

  if(comment=="")
  {
      setcheck(true);
  }
else{

  const newcomment={"name":comment};

  let a=state.users.map((val,index)=>{
      return userid1==val.id? {...val,posts:val.posts.map((v,s)=>{
          return userid==v.id? {...v,commentcount:v.commentcount+1,comments:[...v.comments,newcomment]}:v

      })}:val
  })

  dispatch({type:"users",payload:a});
  localStorage.setItem('user',JSON.stringify(a));

  let b=state.videopost.map((val,index)=>{
      return userid==val.id? {...val,commentcount:val.commentcount+1,comments:[...val.comments,newcomment]}:val
  })

  dispatch({type:"video",payload:b})

  setcomments([...comments, newcomment]);
  setcomment("");
}
}


let remove=(i)=>{

  let a=state.users.map((val,index)=>{
      return userid1==val.id? {...val,posts:val.posts.map((v,s)=>{
          return userid==v.id? {...v,commentcount:v.commentcount>0?v.commentcount-1:v.commentcount,comments:v.comments.filter((vals,s1)=>{
              return i==s1? "":vals
          })}:v

      })}:val
  })

  dispatch({type:"users",payload:a});
  localStorage.setItem('user',JSON.stringify(a));

  let b=state.videopost.map((val,index)=>{
      return userid==val.id? {...val,commentcount:val.commentcount>0?val.commentcount-1:val.commentcount,comments:val.comments.filter((vals,s1)=>{
          return i==s1? "":vals
      })}:val
  })

  dispatch({type:"video",payload:b})








}





return(
    <div>
        <div className="video">
        <div className="video-inner">

         <div className="videopage1">
         <div className="videopage1-inner">

         <div className="heading">

        <div className="head">

          <span><h1>Video</h1></span>
                        
        </div>
 
         <div className="icon">

            <span><IoIosSettings /></span>

         </div>

         </div>

         <div className="content">

         <div className="content-1">
         <div className="content-1-inner">
 
        <div className="icon">
        <span><FaYoutube /></span>
        </div>
        <div className="head">
         <span>Home</span>
        </div> 
        </div>
        </div>   
        
        <div className="content-2">
        <div className="content-2-inner">
        <div className="icon1">
        <span><RiLiveFill /></span>    
        </div>

        <div className="head-1">
        <div className="head"><span>Live</span></div>
        </div>

        </div>    
        </div>
          
        <div className="content-2">
        <div className="content-2-inner">
        <div className="icon1">
        <span><FaPlayCircle /></span>    
        </div>

        <div className="head-1">
        <div className="head"><span>Reels</span></div>
        </div>

        </div>    
        </div>

        <div className="content-2">
        <div className="content-2-inner">
        <div className="icon1">
        <span><FaClapperboard /></span>    
        </div>

        <div className="head-1">
        <div className="head"><span>Shows</span></div>
        </div>

        </div>    
        </div>


        <div className="content-2">
        <div className="content-2-inner">
        <div className="icon1">
        <span><BsRocketTakeoff /></span>    
        </div>

        <div className="head-1">
        <div className="head"><span>Explore</span></div>
        </div>

        </div>    
        </div>


        <div className="content-2">
        <div className="content-2-inner">
        <div className="icon1">
        <span><FaBookmark /></span>    
        </div>

        <div className="head-1">
        <div className="head"><span>Saved videos</span></div>
        </div>

        </div>    
        </div>
  



         </div>


        </div>   
        </div>   

        <div className="videopage2">
        <div className="videopage2-inner">

        <div className="first">
  <div className="heading">
    <h1>Video</h1>
  </div>
  <div className="icon"><span><FaSearch /></span></div>  
</div>
            

    {state.videopost.map((val,index)=>{
      return         <div className="dynamic-post" key={index}>
      <div className="heading">
         <div className="avatar">
         <Avatar  src={val.profile}  sx={{ width: 40, height: 40 }}/>
         </div>
         <div className="username">
             <div className="name">
             {val.firstname}&nbsp;{val.surname}
               <span>Follow</span>
             </div>
             <div className="day">
                 {val.date}
                 <span><BiWorld /></span>
             </div>
         </div>
         <div className="icon">
         <span><BsThreeDots /></span>  
         
         </div>
         
      </div>
      <div className="caption">
         {val.caption} 
      </div>

      <div className="video">
       <video width="500" height="240" controls>
         <source src={val.video} type="video/mp4"/>
       </video>
      </div>
      <div className="count">
         <div className="like">
             <img  src={like} alt="logo"/>
              <span>{val.likecount}</span>   
         </div>
         <div className="comment">
             {val.commentcount}
          <span><FaComment /></span>
         </div>
      </div>
      <div className={val.comment?"other1":"other"}>
      {val.like? 
    <div className="part1" onClick={()=>{less(val.id,val.uid)}}>
           <div className="icon" ><AiOutlineLike /></div>
           <div className="name">Like</div>
    </div>:
    <div className="part" onClick={()=>count(val.id,val.uid)}>
           <div className="icon"><AiOutlineLike /></div>
           <div className="name">Like</div>
    </div>} 
    
    <div className={val.comment?"part1":"part"} onClick={()=>{down(val.id,val.uid)}}>
       <div className="icon"><FaRegComment /></div>
       <div className="name">Comment</div>
       </div>
         <div className="part">
         <div className="icon"><PiShareFat /></div>
         <div className="name">Share</div>
         </div>

      </div>

      {val.comment?<div className="comment-section">
    <div className="comment-inner">
{val.comments.map((s,s1)=>{
    return  <div key={s1}>
   <div className="box">
        {s.name}
   </div>     
   <div className="delete" onClick={()=>remove(s1)}> Delete</div>  

    </div>

})}

{/* {comments.map((value,index)=>{
   return <div>
   <div className="box">
        {value.name}
   </div>     
   <div className="delete" onClick={()=>remove(index)}> Delete</div>   
   
  </div>
})}  */}
  </div> 
          </div> 
       :""}                       
      
      {val.comment?<div>
       <div className="comment1">
       <Avatar  src={state.detail.profile}  sx={{ width: 30, height: 30 }}/>
       <div className="inputbox">
       <input type="text" name="check"  value={comment} placeholder=" Write a comment"onChange={changecomment}/>
       <span onClick={onsubmit}><IoMdSend /></span>
       {comment==""&&check?"":""}
       </div>
       </div>
   </div>:""}
 </div> 

    })}        
   



        </div> 
        </div>

        </div>    
        </div>

    </div>
)



} 

export default Video;
