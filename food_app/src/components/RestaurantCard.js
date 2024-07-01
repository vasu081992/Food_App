import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {

  const {resData} = props;
  const {loggedInUser} = useContext(UserContext) // destructuring object right away here 
  
    return(
  
  <div className="m-4 p-4 w-[250px]  bg-gray-50 hover:bg-gray-200">
  
  <img src={
    
   CDN_URL  + resData.info.cloudinaryImageId
     } className="w-[200px] h-[200px] rounded-lg  "/>
  
  <h3 className="font-bold py-2 text-lg"> {resData.info.name}</h3>
  
  <h4> {resData?.info?.cuisines?.join(",")} </h4>
  
  <h4> Average rating : {resData?.info.avgRating} stars </h4>

  
  <h4> Cost : {resData?.info?.costForTwo}  </h4>
  
  <h4> Delivery time : {resData?.info?.sla?.deliveryTime} minutes </h4>

  <h4>User : {loggedInUser}</h4>
  
  </div>
  
    )
  
  
  }
  
  //higher order component...input will be restaurant card and output will be higher order component with promoted label 


  export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
 return (
  <div>
    <label className="class-label"> Promoted ! </label>
    <RestaurantCard {...props}  /> {/* when we write higher order components we pass props down to the component using spread operator like this */}      
  </div>
 )

    }
  }
  export default RestaurantCard