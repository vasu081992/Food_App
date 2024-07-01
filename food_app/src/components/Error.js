import { useRouteError } from "react-router-dom"
import { useState } from "react"

const Error = ()=>{

const [err1,seterr1]=useState(1)

  const err = useRouteError()

  console.log(err)

  return (

<div>


<h1> Ooops ! You have landed on an invalid page, Something went wrong </h1>

<h2> {err.statusText},{err.data}</h2>

{console.log("use state log",useState())}
</div>



  )

}

export default Error