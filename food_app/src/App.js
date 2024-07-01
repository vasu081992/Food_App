import React,{lazy,Suspense, useState } from "react"
import ReactDOM  from "react-dom/client"
import { useEffect } from "react"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import RestaurantCard from "./components/RestaurantCard.js"
import { createBrowserRouter, RouterProvider,Outlet,createHashRouter} from "react-router-dom"
import Error from "./components/Error.js"
import Menu from "./components/Restaurantmenu.js"
import UserContext from "./utils/userContext.js"
import "./index.css"



/*
Components needed for food app (upper level plan): 

Header : Logo 
        Nav items(links)

Body :  Search  
        Restaurant container
        Restaurant cards
          image
          name of res, star rating, cuisines,delivery time, etc

Footer : Copyright 
        Links
        Addresses
        Contact us

*/

const Grocery= lazy(()=>
  import("./components/Grocery") // this is lazy loading. loads code only when we click on it.
);

const About= lazy(()=>
  import("./components/About") // this is lazy loading. loads code only when we click on it.
);

const ContactUs = lazy(()=>import("./components/Contactus"))




const Applayout = () => {

const [userName,setuserName] = useState(null)

  useEffect(()=>{
    //we will make a api call generally and get username and password info 
    //lets take some example user name here for understanding react context better 
    
    
    let data = {
      name : "Vasu",
    }
    
    setuserName(data.name)
    
    
    },[])


return (

  <UserContext.Provider value={{loggedInUser:userName,setuserName}}> 
    <div className="App">

  <Header/>
  {/*if path=/ we need to show body,
  if path = /about, then we need to have about component,
  if path=/contact, we need contact component   */}
<Outlet/>

    </div>

    </UserContext.Provider>
);

};


const appRouter = createBrowserRouter([
{

  path : '/',
  element : <Applayout/>,
  children: [
    {
      path : '/',

      element : <Body/>

    },
{
  path : '/about',

  element :  <Suspense fallback={<h1>Loading.....</h1>}> <About/></Suspense> 

},
{
  path : '/contact',

  element : <Suspense fallback={<h1>Loading.....</h1>}><ContactUs/></Suspense>

},

{
  path : "/grocery",

  element :<Suspense fallback={<h1>Loading.....</h1>}> 
  <Grocery />
    </Suspense>
  
},
{

  path : "/restaurants/:resid",
  element :<Menu/>

}

],
errorElement : <Error/>,

},
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />)

export {appRouter,Applayout}