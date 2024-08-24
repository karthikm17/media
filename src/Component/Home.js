import  React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {Context} from "./Context";
import Avatar from '@mui/material/Avatar';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { FaComment } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import J from "./Image/j.jpg";
import K from "./Image/k.jpg";
import Video from "./Image/video/second.mp4";
import like from "./Image/like.svg";
import frd from "./Image/frd.jpg";
import icon4 from "./Image/ficon/icon4.png";
import icon9 from "./Image/ficon/icon9.png";
import icon8 from "./Image/ficon/icon8.png";
import icon6 from "./Image/ficon/icon6.png";
import icon3 from "./Image/ficon/icon3.png";
import icon5 from "./Image/ficon/icon5.png";
import icon14 from "./Image/ficon/icon14.png";
import icon10 from "./Image/ficon/icon10.png";
import icon15 from "./Image/ficon/icon15.png";
import icon16 from "./Image/ficon/icon16.png";
import icon17 from "./Image/ficon/icon17.png";
import icon2 from "./Image/ficon/icon2.png";
import icon7 from "./Image/ficon/icon7.png";
import icon11 from "./Image/ficon/icon11.png";
import Smile from "./Image/smile.png";
import Photo from "./Image/photo.png";
import Camera from "./Image/camera.png";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



const Home=()=>{

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

let [more,setmore]=useState(false);
let [btn,setbtn]=useState(false);
let[btn1,setbtn1]=useState(false);
let[postpages,setpostpages]=useState(false);
let[comment,setcomment]=useState("");
let[comments,setcomments]=useState([]);
let[randompost,setrandompost]=useState([]);
let[userid,setuserid]=useState();
let[userid1,setuserid1]=useState();
let[check,setcheck]=useState(false);
let x=useNavigate();

let friends=()=>{

    x("/Friends");

}
let video=()=>{

    x("/Video");

}
let marketplace=()=>{

    x("/Marketplace");
}

let group=()=>{

    x("/Groups");
}

useEffect(()=>{

    let s=state.users.map((val,index)=>{
        return val.posts.filter(s=>s.id>100)     
      })
   
      let show=[].concat(...s);

      let random=[];
      for(let i=0; i <=show.length; i++)
        {

         random.push(show[Math.floor(Math.random()*show.length)]);
        
        }

      dispatch({type:"random",payload:random});
      console.log("random",random);
 
      let s1=state.users.map((val,index)=>{
        return val.posts.filter(s=>s.type=="video/mp4")     
      })
      
      let show1=[].concat(...s1);
  
      let random1=[];
      for(let i=0; i <=show1.length; i++)
        {
  
         random1.push(show1[Math.floor(Math.random()*show1.length)]);
        
        }
  
      dispatch({type:"video",payload:random1});
  
  
  console.log("video",random1)
     
  let s2=state.users.map((val,index)=>{
    return val.posts.filter(s=>s.type=="image/jpeg")     
  })
  
  let show2=[].concat(...s2);

  let random2=[];
  for(let i=0; i <=show2.length; i++)
    {

     random2.push(show2[Math.floor(Math.random()*show2.length)]);
    
    }

  dispatch({type:"group",payload:random2});

  console.log("group", random2);

  let random3=[]

  for(let i=0; i <=state.friends.length; i++)
    {

     random3.push(state.friends[Math.floor(Math.random()*state.friends.length)]);
    
    }

  dispatch({type:"friend",payload:random3});

  console.log("friend", random3);


  let random4=[]

  for(let i=0; i <=state.place.length; i++)
    {

     random4.push(state.place[Math.floor(Math.random()*state.place.length)]);
    
    }

  dispatch({type:"place",payload:random4});

  console.log("place", random4);

  

},[])


let handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch({type:"alert",payload:false});

};


let seemore=()=>{

    setmore(!more);
}


let postpage=()=>{
     
    setpostpages(true);
    dispatch({type:"post",payload:true}); 
    x("/Post");
}

let count=(id,i)=>{


    let a=state.users.map((val,index)=>{
        return i==val.id? {...val,posts:val.posts.map((v,s)=>{
            return id==v.id? {...v,like:true,likecount:v.likecount+1}:v

        })}:val
    })

    dispatch({type:"users",payload:a}); 
    localStorage.setItem('user',JSON.stringify(a));

    let b=state.randompost.map((val,index)=>{
        return id==val.id?{...val,like:true,likecount:val.likecount+1}:val
    })

    dispatch({type:"random",payload:b})
}

// let count=(id,i)=>{

//     let a=state.users.map((val,index)=>{
//         return i==val.id? {...val,posts:val.posts.map((v,s)=>{
//             return id==v.id? {...v,like:true,likecount:v.likecount+1}:v

//         })}:val
//     })

//     dispatch({type:"users",payload:a}); 
// }

let count1=(id)=>{

    let a=state.createpost.map((val,index)=>{    
        return id==val.id? {...val,like:true,likecount:val.likecount+1}:val   
    })
    dispatch({type:"createpost",payload:a}); 
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

    let b=state.randompost.map((val,index)=>{
        return id==val.id? {...val,comment:!val.comment}:val
    })

    dispatch({type:"random",payload:b})

}

let down1=(id)=>{

    let a=state.createpost.map((val,index)=>{

            return id==val.id? {...val,comment:!val.comment}:val     
    })

    dispatch({type:"createpost",payload:a}); 

}

let less=(id,i)=>{

    let a=state.users.map((val,index)=>{
        return i==val.id? {...val,posts:val.posts.map((v,s)=>{
            return id==v.id? {...v,like:false,likecount:v.likecount-1}:v

        })}:val
    })

    dispatch({type:"users",payload:a}); 
    localStorage.setItem('user',JSON.stringify(a));

    let b=state.randompost.map((val,index)=>{
        return id==val.id? {...val,like:false,likecount:val.likecount-1}:val
    })

    dispatch({type:"random",payload:b})


}

let less1=(id)=>{

    let a=state.createpost.map((val,index)=>{
            return id==val.id? {...val,like:false,likecount:val.likecount-1}:val
    })

    dispatch({type:"createpost",payload:a}); 
}

let change=()=>{

    setbtn(!btn);
}

let change1=()=>{
    setbtn1(!btn1);
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

    let b=state.randompost.map((val,index)=>{
        return userid==val.id? {...val,commentcount:val.commentcount+1,comments:[...val.comments,newcomment]}:val
    })

    dispatch({type:"random",payload:b})

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

    let b=state.randompost.map((val,index)=>{
        return userid==val.id? {...val,commentcount:val.commentcount>0?val.commentcount-1:val.commentcount,comments:val.comments.filter((vals,s1)=>{
            return i==s1? "":vals
        })}:val
    })

    dispatch({type:"random",payload:b})






    
    let a1 =comments.filter((v,index)=>{
        return i==index?"":v
    })

setcomments(a1);

console.log("s",state.detail);

}

console.log("users",state.users);
console.log("detail",state.detail);
console.log("post",state.createpost);
console.log("comment",comments);


return(

<div>



<div className="Home">

<div className="part1" >
<div className="scrollbar"> 

    <div className="scrollbar-inner">

<div className="navigation">

<div className="avatar">
<Avatar  src={state.detail.profile}  sx={{ width: 30, height: 30 }}/>
</div>

<div className="text">
    <a href="#" >{state.detail.firstname}&nbsp;{state.detail.surname}</a>    
</div>

</div>

<div className="navigation" onClick={friends}>

<div className="avatar">
<img  src={icon4}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Friends</a>    
</div>

</div>

<div className="navigation">

<div className="avatar">
<img  src={icon9}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Memories</a>    
</div>

</div>

<div className="navigation">

<div className="avatar">
<img  src={icon8}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Saved</a>    
</div>

</div>

<div className="navigation" onClick={marketplace}>

<div className="avatar">
<img  src={icon6}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Marketplace</a>    
</div>

</div>

<div className="navigation" onClick={group}>

<div className="avatar">
<img  src={icon3}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Groups</a>    
</div>

</div>

<div className="navigation" onClick={video}>

<div className="avatar">
<img  src={icon5}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Video</a>    
</div>

</div>

<div className="navigation">

<div className="avatar">
<img  src={icon14}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Feeds</a>    
</div>

</div>

<div className="navigation">

<div className="avatar">
<img  src={icon10}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Events</a>    
</div>

</div>


<div className="navigation">

<div className="avatar">
<img  src={icon15}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Ads Manager</a>    
</div>

</div>

{more?<div>

<div className="navigation">

<div className="avatar">
<img  src={icon16}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Climate Centre</a>    
</div>

</div>

<div className="navigation">

<div className="avatar">
<img  src={icon17}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Gaming video</a>    
</div>

</div>

<div className="navigation">

<div className="avatar">
<img  src={icon2}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Messenger</a>    
</div>

</div>

<div className="navigation">

<div className="avatar">
<img  src={icon7}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Pages</a>    
</div>

</div>

<div className="navigation">

<div className="avatar">
<img  src={icon11}  alt="icons"/>
</div>

<div className="text">
    <a href="#" >Play games</a>    
</div>

</div>



</div>:""}


{more?<div>
    <div className="navigation">

    <div className="avatar">
    <div className="icon"><IoIosArrowUp /></div>
    </div>
    
    <div className="text">
        <a href="#" onClick={seemore}> See less</a>    
    </div>
    
    </div>

    
    </div>:
    <div className="navigation">

<div className="avatar">
<div className="icon"><IoIosArrowDown /></div>
</div>

<div className="text">
    <a href="#" onClick={seemore}>See more</a>    
</div>

</div>
}

<div className="horizantal">
    <hr/>
</div>


    </div>
    
</div>


</div>


<div className="part2">

  <div className="post">
    <div className="post-inner">
        <div className="create-post">      
            <div className="new-post">
                <div className="posts">
                <Avatar  src={state.detail.profile}  sx={{ width: 40, height: 40 }}/>
                 <div className="btn" onClick={postpage}><span>What's on your mind, {state.detail.firstname}</span></div>   
                </div>
                <div className="new-post-inner">
                    <div className="image" onClick={postpage}>
                        <img  src={Camera}  alt="icon"  />
                         <span> Live video </span>
                    </div>

                    <div className="image" onClick={postpage}>
                        <img  src={Photo}  alt="icon"  />
                         <span> Photo/video</span>
                    </div>

                    <div className="image" onClick={postpage}>
                        <img  src={Smile}  alt="icon"  />
                         <span> Feeling/activity </span>
                    </div>

                </div>
            </div>

     {state.createpost.map((value,index)=>{
        return   <div className="dynamic-post" key={index}>
        <div className="heading">
           <div className="avatar">
           <Avatar  src={value.profile}  sx={{ width: 40, height: 40 }}/>
           </div>
           <div className="username">
               <div className="name">
                  {value.firstname}&nbsp;{value.surname}
                 <span>Follow</span>
               </div>
               <div className="day">
                  {value.date}
                   <span><BiWorld /></span>
               </div>
           </div>
           <div className="icon">
           <BsThreeDots />
           </div>
           <div className="icon">
           <RxCross2 />
           </div>
        </div>
        <div className="caption">
            {value.caption}
        </div>

        {value.type=="video/mp4"?  
         <div className="video">
          <video  controls>
          <source src={value.image} type="video/mp4"/>
          </video>
        </div>
        :
        <div className="img">
        <img src={value.image} alt="post" />
     </div>
        }
       
     
        <div className="count">
           <div className="like">
               <img  src={like} alt="logo"/>
                <span>{value.likecount}</span>   
           </div>
           <div className="comment">
               {value.commentcount}
            <span><FaComment /></span>
           </div>
        </div>
        <div className={value.comment?"other1":"other"}>

{value.like? 
<div className="part1" onClick={()=>{less1(value.id)}}>
       <div className="icon" ><AiOutlineLike /></div>
       <div className="name">Like</div>
</div>:
<div className="part" onClick={()=>count1(value.id)}>
       <div className="icon"><AiOutlineLike /></div>
       <div className="name">Like</div>
</div>}   

   <div className={value.comment?"part1":"part"} onClick={()=>{down1(value.id)}}>
   <div className="icon"><FaRegComment /></div>
   <div className="name">Comment</div>
   </div>
   <div className="part">
   <div className="icon"><PiShareFat /></div>
   <div className="name">Share</div>
   </div>

</div>

{value.comment?<div className="comment-section">
<div className="comment-inner">
{value.comments.map((s,s1)=>{
return  <div key={s1}>
<div className="box">
    {s.name}
</div>     
<div className="delete" onClick={()=>remove(s1)}> Delete</div>  

</div>

})}

{comments.map((value,index)=>{
return <div>
<div className="box">
    {value.name}
</div>     
<div className="delete" onClick={()=>remove(index)}> Delete</div>   
</div>
})} 
</div> 
      </div> 
   :""}             

{value.comment?<div>
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

 {/* <div className="dynamic-post">

                 <div className="heading">
                    <div className="avatar">
                    <Avatar  src={frd}  sx={{ width: 40, height: 40 }}/>
                    </div>
                    <div className="username">
                        <div className="name">
                            Jayanthan Jayaraman .
                          <span>Follow</span>
                        </div>
                        <div className="day">
                            a day ago .
                            <span><BiWorld /></span>
                        </div>
                    </div>
                    <div className="icon">
                      <span><BsThreeDots /></span>  
                    </div>
                    <div className="icon">
                        <span><RxCross2 /></span>
                    </div>
                 </div>
                 <div className="caption">
                    always brother 
                 </div>
                 <div className="img">
                    <img src={J} alt="post" />
                 </div>
                <div className="video">
                  <video width="500" height="240" controls>
                    <source src={Video} type="video/mp4"/>
                  </video>
                 </div> 
                  <div className="count">
                    <div className="like">
                        <img  src={like} alt="logo"/>
                         <span>12</span>   
                    </div>
                    <div className="comment">
                        2
                     <span><FaComment /></span>
                    </div>
                 </div>
                 <div className={btn1?"other1":"other"}>
                    <div className={btn?"part1":"part"} onClick={change}>
                        <div className="icon"><AiOutlineLike /></div>
                        <div className="name">Like</div>
                    </div>
                    <div className={btn1?"part1":"part"} onClick={change1}>
                    <div className="icon"><FaRegComment /></div>
                    <div className="name">Comment</div>
                    </div>
                    <div className="part">
                    <div className="icon"><PiShareFat /></div>
                    <div className="name">Share</div>
                    </div>

                 </div>

                {btn1?<div className="comment-section">
                 <div className="comment-inner">
                   
            {comments.map((value,index)=>{
                return <div>
                <div className="box">
                     {value.name}
                </div>     
                <div className="delete" onClick={()=>remove(index)}> Delete</div>   
                
               </div>
            })} 
               </div> 
                       </div> 
                    :""}             
                 
                {btn1?<div>
                    <div className="comment1">
                    <Avatar  src={state.detail.profile}  sx={{ width: 30, height: 30 }}/>
                    <div className="inputbox">
                    <input type="text" name="check"  value={comment} placeholder=" Write a comment"onChange={changecomment}/>
                    <span onClick={onsubmit}><IoMdSend /></span>
                    {comment==""&&check?"":""}
                    </div>
                    </div>
                </div>:""}

</div>  */}

        

  {state.randompost.map((val,index)=>{
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
       <div className="icon">
         <span><BsThreeDots /></span>  
       </div>
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
   
 <div>
    {/* <button onClick={handleClick}>Open Snackbar</button> */}
      <Snackbar open={state.alert} autoHideDuration={6000} onClose={handleClose} >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Welcome back {state.detail.firstname}{state.detail.surname}
        </Alert>
      </Snackbar>
</div>

</div>

<div className="part3">
<div className="friends">
<div className="part-inner">

<div className="heading">
    <span>Contacts</span>
</div>


{state.detail.friends.map((val,index)=>{

return <div className="list" key={index}>

<div className="avatar">
<Avatar src={val.profile}  sx={{ width: 30, height: 30 }}/>
</div>

<div className="text">
    <a href="#" >{val.name}</a>    
</div>

</div>

})}



<div className="line">
    <hr/>
</div>

</div>    
</div>
</div>




</div>

</div>
)




}
export default Home;