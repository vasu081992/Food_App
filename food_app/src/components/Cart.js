import { useSelector } from "react-redux"
import ItemList from "./itemList"
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";



const Cart = () => {



  const dispatch = useDispatch();// this comes from react-redux to subscribe to stores


 const handleClearCart = ()=>{
  dispatch(clearCart(cartItems))
 }

const cartItems = useSelector((store)=>store.cart.items) // we are subscribing to the store here  

  return(

  <div className="text-center m-4 p-4">  

    <p className="text-xs">This is a food  cart ! User added items are displayed here</p>
<br/>
<br/>
<br/>
{cartItems.length>0 && (
<button className="bg-blue-500 hover:bg-blue-700 text-white text-l py-2 px-2 rounded" onClick={()=>handleClearCart(cartItems)}>Clear Cart</button>
      )
}
<div>

{cartItems.length===0 && <h1>Cart is empty ! Add items to cart !</h1>}

      <ItemList items={cartItems}/>
    </div>



  </div>
  
  )
}

export default Cart
