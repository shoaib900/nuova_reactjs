import React, { useState } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'

const App = () => {
  const [data,setData] = useState("hello data")
  return (
    <div>
      <h1 className='h1'>hello world App</h1>
      <hr />

      {/* <Home /> */}

      <About data= {data} />
    </div>
  )
}

export default App
