import React from "react";
import { useContext } from "react";
import {Context} from "./Context";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineNewspaper } from "react-icons/md";
import { FaBandcamp } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi";
import { useState } from "react";
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
import J from "./Image/j.jpg";




let Groups=()=>{

  let{state,dispatch}=useContext(Context);
  

let [btn,setbtn]=useState(false);
let[btn1,setbtn1]=useState(false);
let[comment,setcomment]=useState("");
let[comments,setcomments]=useState([]);
let[check,setcheck]=useState(false);
let[userid,setuserid]=useState();
let[userid1,setuserid1]=useState();



// let change=()=>{

//   setbtn(!btn);
// }

// let change1=()=>{
//   setbtn1(!btn1);
// }


let count=(id,i)=>{


  let a=state.users.map((val,index)=>{
      return i==val.id? {...val,posts:val.posts.map((v,s)=>{
          return id==v.id? {...v,like:true,likecount:v.likecount+1}:v

      })}:val
  })

  dispatch({type:"users",payload:a}); 
  localStorage.setItem('user',JSON.stringify(a));

  let b=state.grouppost.map((val,index)=>{
      return id==val.id?{...val,like:true,likecount:val.likecount+1}:val
  })

  dispatch({type:"group",payload:b})
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

  let b=state.grouppost.map((val,index)=>{
      return id==val.id? {...val,comment:!val.comment}:val
  })

  dispatch({type:"group",payload:b})

}

let less=(id,i)=>{

  let a=state.users.map((val,index)=>{
      return i==val.id? {...val,posts:val.posts.map((v,s)=>{
          return id==v.id? {...v,like:false,likecount:v.likecount-1}:v

      })}:val
  })

  dispatch({type:"users",payload:a}); 
  localStorage.setItem('user',JSON.stringify(a));

  let b=state.grouppost.map((val,index)=>{
      return id==val.id? {...val,like:false,likecount:val.likecount-1}:val
  })

  dispatch({type:"group",payload:b})


}



let changecomment=(e)=>{
  if(e.target.name="check"){
      setcomment(e.target.value);
  }
  

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

let b=state.grouppost.map((val,index)=>{
    return userid==val.id? {...val,commentcount:val.commentcount+1,comments:[...val.comments,newcomment]}:val
})

dispatch({type:"group",payload:b})



  setcomments([...comments, newcomment]);
  setcomment("");
}
}

console.log(comments);

let remove=(i)=>{

  let a=state.users.map((val,index)=>{
    return userid1==val.id? {...val,posts:val.posts.map((v,s)=>{
        return userid==v.id? {...v,commentcount:v.commentcount>0?v.commentcount-1:v.commentcount,comments:v.comments.filter((vals,s1)=>{
            return i==s1? "":vals
        })}:v

    })}:val
})

dispatch({type:"users",payload:a});

let b=state.grouppost.map((val,index)=>{
    return userid==val.id? {...val,commentcount:val.commentcount>0?val.commentcount-1:val.commentcount,comments:val.comments.filter((vals,s1)=>{
        return i==s1? "":vals
    })}:val
})

dispatch({type:"group",payload:b})






  
  let a1 =comments.filter((v,index)=>{
      return i==index?"":v
  })

setcomments(a1);


}





return(
    <div>
<div className="group">
<div className="group-inner">

<div className="grouppage1">
<div className="grouppage1-inner">

<div className="heading">

<div className="head">

<span><h1>Groups</h1></span>
                        
</div>

<div className="icon">

<span><IoIosSettings /></span>

</div>

</div>

<div className="content">

<div className="content-1">
<div className="content-1-inner">

 <div className="icon">
<span><MdOutlineNewspaper /></span>
</div>
<div className="head">
<span>Your feed</span>
</div>   

</div>
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><FaBandcamp /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Discover</span></div> 
</div>

</div>    
</div>

<div className="content-2">
<div className="content-2-inner">
<div className="icon1">
<span><MdGroups /></span>    
</div>

<div className="head-1">
 <div className="head"><span>Your groups</span></div> 
</div>

</div>    
</div>

<div className="newfield">
 <div className="newfield-inner">
  <div  className="field1">
    <div className="icon">
    <span><HiOutlinePlus /></span>
    </div>
  <span>Create New Group</span>
  </div>

</div> 
</div>


</div>
</div>

</div>

<div className="grouppage2">
<div className="grouppage2-inner">

{state.grouppost.map((val,index)=>{
    return <div className="dynamic-post" key={index}>
    <div>
  
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
       {/* <div className="icon">
         <span><BsThreeDots /></span>  
       </div> */}
       <div className="icon">
           <span><RxCross2 /></span>
       </div>
    </div>

     <div className="caption">
       {val.caption}
    </div>
{val.type=="video/mp4"?

<div className="video">
<video width="500" height="240" controls>
  <source src={val.video} type="video/mp4"/>
</video>
</div> 
:
<div className="img">
<img src={val.image} alt="post" />
</div>
}



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
    </div>
 })}  



</div>
</div>

</div>
</div>
</div>
)



} 

export default Groups;
