import { BiGroup } from "react-icons/bi";
import Data from "../Store.json";

 

export  let State={

login:false,
post:false,
alert:false,
friends: Data.friends,
place:Data.marketplace,
users:Data.user,
randompost:[],
videopost:[],
grouppost:[],
createpost:[],
detail:[],
friendpost:[],
placepost:[]
}

export let  change=(state,action)=>{

    
if(action.type=="correct")
{
    return{...state,login:action.payload}
}
else if(action.type=="alert")
{
    return{...state,alert:action.payload}
}    
else if(action.type=="post")
{
    return{...state,post:action.payload}
}
else if(action.type=="createpost")
{
    return {...state,createpost:action.payload}
}
else if(action.type=="users")
{
    return {...state,users:action.payload}
}
else if(action.type=="detail")
{
    return {...state,detail:action.payload}
}
else if(action.type=="random")
{
    return {...state,randompost:action.payload}
}
else if (action.type=="video")
{
    return {...state,videopost:action.payload}
}   

else if (action.type=="group")
{
    return {...state,grouppost:action.payload}
}    

else if(action.type=="friend")
{
    return {...state,friendpost:action.payload}
}    

else if (action.type=="place")
 {

    return {...state,placepost:action.payload}
 }   
    
}