import { LOGO_URL } from "../utils/constants"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/userContext"

const Header = () => {

  const [btnNameReact,setbtnNameReact] = useState("Login")

   const data = useContext(UserContext)
   console.log("context data",data)

  useEffect(()=>{
    console.log("use effect from header component")
  },[btnNameReact]) // without dependency array whenever any state change happena and this header component is re - rendered , use effect is also called every single time

  // however when an empty dependency array is given, it runs use effect only after first render of component and does not run use effect in next subsequent times 


// if dependency array is given some state variable like btnNameReact in that case, whenever  btnNameReact changes, comp will be re-rendered and use effect will be called as well. 



  console.log("header rendered")

  const onlineStatus = useOnlineStatus();
  return (
   <div className="flex justify-between shadow-lg m-2 bg-pink-50 sm:bg-red-100">

      <div className="logo-container">
        <img src={LOGO_URL} className="w-20"/>
      </div>
              
          <div className="items-center">
            <ul className="flex p-4 m-4 align">

              <li className="px-3">
              onlineStatus:{onlineStatus? "🟢":"🔴"}

              </li>
          <li className="px-3"> 

          <Link to="/"> 
           Home 
           </Link> 
          </li> 
          <li className="px-3"> 
          <Link to="/about">   About Us </Link>
            </li>
          <li className="px-3">
          <Link to="/contact">  
          Contact us </Link> </li>

          <Link to="/grocery"> 
           Grocery 
           </Link> 

          <li className="px-3">Cart </li>
          <button className="login" onClick={()=>{
            btnNameReact==="Login"? setbtnNameReact("Logout"): setbtnNameReact("Login") // use this for explaining in interview about use State - very important and good example
          }}> {btnNameReact}
          </button>
          <li className="px-4 font-bold">{data.loggedInUser}</li>{/*  data object via context is created in one file called userContext.js but used here without prop drilling.    */}
          </ul>
          </div>
   </div>

  )

}

export default Header