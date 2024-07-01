
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard"
import {useState,useEffect,useContext} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus.js"
import UserContext from "../utils/userContext.js"


const Body = () =>{

  const [listofRestaurants,setlistofRestaurants] = useState([])

  const [filteredRestaurant,setfilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

const [userName,setUserName] = useState(null)

  console.log("list of restaurnts",listofRestaurants)


  useEffect(()=>{
    fetchData()
    console.log("Use effect called")
  },
    [])


   

const fetchData = async()=>{

  const response = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0282063&lng=76.981068&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',{
    headers: {
      'x-cors-api-key': 'temp_e12922cf26b5766af140a32f156905a2'
      }
  })


const data = await response.json();
// console.log("FULL API",data)

// console.log("RESTAURANTS",data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

setlistofRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

// setfilteredRestaurant(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

setfilteredRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

  const handleInputChange = () =>{


    const filteredList3 = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))

    setfilteredRestaurant(filteredList3)

  }

  const handleTyping = (e)=>{
    console.log("search text typed",e.target.value)
    setSearchText(e.target.value)
  }

  const handleUserName = (e) =>{

    setuserName(e.target.value)
  }

  console.log("user name typed",userName)

  //this is conditional rendering / ie we are showing shimmer component on initial page load

  // if(listofRestaurants.length===0){

  //   return <Shimmer />
  // }
  
  console.log('Body rendered')

  const onlineStatus = useOnlineStatus();

const {setuserName,loggedInUser} = useContext(UserContext)




  if(onlineStatus===false)
{
  return (
    <h1> Looks like you are offline ! check your internet connection </h1>
  )
}



  return listofRestaurants.length===0 ? (<Shimmer/> ) : (

<div className="body">

    <div className="filter">
 
 <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{

const filteredList = listofRestaurants.filter((res)=>res.info.avgRating>4.5)

setfilteredRestaurant(filteredList)


 }}>Top Rated restaurants</button>


<button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{

const filteredList2 = listofRestaurants.filter((res)=>res.info.sla.deliveryTime<25)
 
setfilteredRestaurant(filteredList2)


 }}>Quick delivery</button>

<button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{

const filteredList4 = listofRestaurants.filter((res)=>res.info.veg)

 
setfilteredRestaurant(filteredList4)


 }}>Veg hotels</button>
 
<button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{

const filteredList5 = listofRestaurants.filter((res)=>res.info.cuisines.filter((cuisine)=>
  cuisine.toLowerCase()==='chinese'
).length>0 )
 
setfilteredRestaurant(filteredList5)


 }}>Chinese</button>



<button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{


setfilteredRestaurant([])

const filteredList2 = listofRestaurants.filter((res)=>res.info.sla.deliveryTime<30)


 }}>Hide restaurants</button>


<input type="text" className="m-4 p-4 border-solid border-black" id="search-input" placeholder="Search your favourite restaurant..." value={searchText}
//  onChange={(e)=>{

// console.log(e)
// setSearchText(e.target.value) } 

// } 
onChange={handleTyping} 

></input>

    <button className="px-4 py-2 bg-lime-50 m-4 rounded-lg" onClick={handleInputChange}
    id="search-button"> Search </button>


</div>

<div>
  <label className="mx-4"> Username : </label>
  <input className="border border-black mx-1 radius-lg" onChange={handleUserName} value={loggedInUser}></input>
</div>


    <div className="flex flex-wrap"> 
    
    {filteredRestaurant.map((restaurant)=> (<Link key={restaurant.info.id}  style={{textDecoration: 'none',color:'black'}} to={"/restaurants/"+restaurant.info.id}>


     {
      Number(restaurant.info.id)>300000 && Number(restaurant.info.id)<=550000? 
      (<RestaurantCardPromoted resData={restaurant}/>) :
      
      (
      
        <RestaurantCard  resData={restaurant} /> 

      )

     }
     </Link>)
    ) 
  }
    </div>
    
</div>

  )



}

export default Body


