import { useEffect,useState } from "react"
import { MENU_API } from "../utils/constants.js"

const useRestaurantMenu =(resid)=>{

  const [resinfo,setresinfo] = useState(null)


  useEffect(()=>{

    fetchMenu()
  },[])

  const fetchMenu = async()=>{

    const data = await fetch(MENU_API+resid+'&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER')
   
    const json = await data.json()
   
   console.log("JSON DATA",json)
   
   setresinfo(json)
     }


  return resinfo;
}

export default useRestaurantMenu