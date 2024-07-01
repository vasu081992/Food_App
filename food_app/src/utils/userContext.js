import { createContext } from "react"

const UserContext = createContext({

  loggedInUser : "defaultUser",



})

export default UserContext   // this userContext can be accessed anywhere in the react App. 