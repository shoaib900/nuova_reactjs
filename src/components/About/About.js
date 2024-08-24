import React, { useState } from 'react'

const About = ({data}) => {
    // const {data} = props

   const [number, setNumber] = useState(0)
   const handleZero= ()=>{
    if(number <= 0){
        setNumber(0)
    }else{
        setNumber(number - 1)
    }
   }
  return (
    <div>
        <h1>about page {number} </h1>

        <button onClick={()=> setNumber(number + 1)}>add value</button>

        <button onClick={()=> setNumber(number - 1)}>subtract value</button>

        <button onClick={handleZero}>minus value</button>
        <button onClick={()=> setNumber(0)}>zero value</button>

        <p> {data}</p>
      
    </div>
  )
}

export default About
