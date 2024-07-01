import {useState,useEffect} from "react"

const useOnlineStatus =()=>{

  //check if online 

  const [status,setstatus] = useState(true);

  useEffect(()=>{

  
  window.addEventListener("offline", () => {
    console.log("You are now not connected to the network."); 
    setstatus(false)
  });

  window.addEventListener("online", () => {
    console.log("You are now connected to the network."); 
    setstatus(true)
  });



},[])



  return status; //boolean value



}

export default useOnlineStatus