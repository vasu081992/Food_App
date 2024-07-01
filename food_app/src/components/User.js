import { setIn } from "formik";
import React from "react";
import {useState,useEffect} from "react"

const User = ()=>{  // in functional component, it is a funtion that returns a piece of jsx

  const [count,setcount]=useState(0)


  const handleCountChange=()=>{
    
    let count1 = count+1;
    setcount(count1);
    
  }

useEffect(()=>{
  
  let timer = setInterval(()=>{
    console.log("interval logs")
  },1000)

  return()=>{
    clearInterval(timer)
  }
},[])

  const handleCountChangeDecre=()=>{
    
    let count2 = count-1;
    setcount(count2);
    
  }



  return <div className="user-card">

<h1>Count : {count}</h1>

<h1> Name : Vasu</h1>

<h2>Location : Coimbatore </h2>


<h2>Email : vasudevan29.92@gmail.com </h2>

<button onClick={handleCountChange}>Increment</button>

<button onClick={handleCountChangeDecre}>Decrement</button>

  </div>


}

export default User