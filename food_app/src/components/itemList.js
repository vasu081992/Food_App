import React from 'react'
import { CDN_URL } from '../utils/constants'

function ItemList({items,dummy}) {

  console.log("dummy data passed from restaurant menu to this itemlist component",dummy) // this is to understand prop drilling



  return (
    <div>
      
      { items.map((item)=>(
          <div className=' flex justify-between items-start border-b-2 border-grey text-left mt-2 mb-2'>
            <div className='flex-column w-10/12'>
          <span className='font-lg'>{item.card?.info?.name || item.title}</span> 
          <p className='text-xs'>  {item.card?.info?.description} </p>
          <b>{item.card?.info?.price? `₹${item.card?.info?.price/100}` : `₹${Math.floor(Math.random()*350)}`}</b>
          </div>
          <div className='w-2/12 relative flex justify-center'> 

          <div className=' absolute bottom-0'>
          
<button className='p-0.5 bg-black bg-opacity-50 shadow-lg text-white mx-2 border rounded-lg'>Add + </button>
</div>
<img 
  src={item.card?.info?.imageId 
    ? `${CDN_URL + item.card.info.imageId}` 
    : "https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg"
  } 
  className='w-20 h-auto object-contain rounded-lg' 
  alt="kitchen pic"
/>
          </div>
        </div>
     
        ))
      }
      </div>
  )
    
}

export default ItemList