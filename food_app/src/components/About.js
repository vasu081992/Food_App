
import UserClass from "./User_class";
import User from "./User"

import UserContext from "../utils/userContext";
import { useContext } from "react";

const About = ()=>{

  const {loggedInUser} = useContext(UserContext) // destructuring object right away here 


return <div> 
 
 <h1> About us </h1>
  <User/>
  <h1>Default user : {loggedInUser}</h1>
</div>
}

export default About