import React from 'react';


class UserClass extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      count : 0,
      currentnum:100,
      userinfo : {
        name:"dummyname",
        location:"default2222222222222222222222222222222222222222222222222222222222222222222",
        avatar_url:""
      }
    }

    console.log("Constructor called")
  }

  async componentDidMount(){
    console.log("component did mount called post render")

      const response = await fetch('https://api.github.com/users/akshaymarch7')
      const json = await response.json()
      console.log(json);

      console.log("API call inside compdidmount",json)


      this.setState({
        userinfo:json
      })

      this.timer = setInterval(()=>{
console.log("Hey buddy after every second ")
      },1000)
  }

  componentWillUnmount(){

    console.log("Component will unmount called now ") // this is called when we remove any component from DOM or shift to new page

    clearInterval(this.timer)
  }

render(){   // here in class based compnent, it has a render method which return jsx


  const {name,location,avatar_url  } = this.state.userinfo;// if we destructure like this, we can just use name and location inside return function

  console.log("render method called")
  return (

<div className="user-card">

<h1> Name : {this.props.name }</h1>
<h2>Location : {this.props.location} </h2>
<h2>Email : vasudevan29.92@gmail.com </h2> 

<h3>Count : {this.state.count} </h3> 

<h3>Currentnum : {this.state.currentnum} </h3> 

<button onClick={()=>{
  this.setState({
    count : this.state.count+ 1,
    currentnum : this.state.currentnum + 1
  })  
}}>Increment</button>

<button>Decrement</button>
<h1>{name}</h1>

<h1>{location}</h1>

<img src={avatar_url}/>

  </div>

  ) 

  

}

}

export default UserClass


// life cycle flow of class based component : 
/*

1. Mounting life cycle

constructor called
render called
   some dummy/ initial state is rendered on DOM
   
component did mount called 
   api call 
   set state --> state change happens here

2. Update life cycle

  setstate triggers render method again 

  now render will happen with new api data (since state variable is updated)

  React updates DOM --> html loaded with new api data

  then ComponentDidUpdate() is called now. 


   


*/