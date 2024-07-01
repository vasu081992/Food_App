
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu.js"
import ResCategories from "./ResCategories.js"
import { useState } from "react"




const RestaurantMenu = ()=>{ 

  const {resid} = useParams()
  const resinfo = useRestaurantMenu(resid) // custom hook created for first time. which is inside utils folder. 
  const [indexset,setExpandAccordion]=  useState(null)

  const dummy = "dummy data";

  console.log("index of item clicked",indexset)
/* 
now Menu component has only responsibility ie just to display menu in UI as fetching responsibility is done by useRestaurantMenu custom hook
*/
  console.log(resid)

  if (resinfo===null){
    return <Shimmer/>
  }
  const { name, cuisines,costForTwoMessage } = resinfo?.data?.cards[2]?.card?.card?.info;

  const {itemCards} = resinfo?.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card;

  const categories = resinfo?.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards.filter((cat)=>cat.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || cat.card?.["card"]?.["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
)


return(

<div className="text-center">

<h1 className="font-bold my-4 text-2xl"> {name} </h1>

<h2 className="font-bold my-4 text-2xl" > {cuisines.join(",")} -{costForTwoMessage} </h2>

{
  categories.map((item,index)=> //index is given intentionally as a part of map function to control the show/hide behaviour

    <ResCategories data={item?.card?.card} showItems={index===indexset} setExpandAccordion={()=>setExpandAccordion(index===indexset?null:index)} dummy={dummy}/>


)

  }


{/* 
<ul>

  {itemCards.map((item)=>{

        const price = item.card.info.defaultPrice ?? item.card.info.finalPrice??item.card.info.price ;
   
        return (
    <li key={item.card.info.id}>

      {item.card.info.name} -  Price : {price/100}rs 
  
  </li>
        )

}
  )
}

</ul> */}
</div>

  )

}

export default RestaurantMenu

