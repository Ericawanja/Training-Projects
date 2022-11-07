import React from 'react'
import { useState } from 'react'

function Counter() {
    let [counter, setCounter] = useState(0)
    const add =()=>{
        setCounter (prev=>prev+1)
    }
    const minus = ()=>{
        setCounter(prev=>prev-1)
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>add()}>+</button>
        <button onClick={()=>minus()}>-</button>
    </div>
  )
}

export default Counter