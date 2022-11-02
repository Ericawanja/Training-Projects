import React from 'react'
import useCounter from './UseCounter'

function Decrement() {
  let data= useCounter(-1)
  return (
    <div>
      {data}
    </div>
  )
}

export default Decrement