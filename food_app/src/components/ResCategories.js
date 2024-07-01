import React from 'react'
import { useState } from 'react'
import ItemList from './itemList'


function ResCategories({data,showItems,setExpandAccordion,dummy}) {


  // const [arrow,setArrow] = useState(false)
  // const [itemsDisplay,showItems] = useState(false)
// const arrowSwitch = ()=>{
//   setArrow(!arrow)
//   showItems(!itemsDisplay)

// }  


const handleAccordClick = () =>{

  setExpandAccordion()


}

  return (
    <div>
    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
<div className='flex justify-between cursor-pointer' onClick={handleAccordClick}>
<span className='font-bold text-lg'> 

{data.title} ({data.itemCards ? data.itemCards.length : data.categories ? data.categories.length : 0})

</span>

<span className={"fas fa-arrow-down"} style={{ marginLeft: '8px' }}></span>
</div>

{/*Accordion body */}

{showItems&& 
    <ItemList dummy={dummy} items={data.itemCards? data.itemCards : (data.categories? data.categories:"")} />
}
    </div>
    </div>
  )
}

export default ResCategories