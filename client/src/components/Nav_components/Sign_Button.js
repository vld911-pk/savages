import React,{useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';

function Sign_Button(){

const [redirect,setRedirect] = useState(false);
useEffect(() =>{
        setRedirect(false);
},[])


const clickHandler = () =>{
    if(redirect){
      return <Redirect to = "/login" />
    }
}
    return (
       <>
                <div className = "navbar1">
                    {clickHandler()}
                    <button onClick = {() => {setRedirect(true)}} className = "btn btn-outline-primary custom">Sign in</button>
                </div>
       </>
    );
}
export default Sign_Button;