import React from 'react'
import {useState} from 'react'

const State = () => {
  const[count,setCount]=useState(0)
  const[like,setlike]=useState(4)
    const[dislike,setdislike]=useState(1)
    return (
    <div>
        <h1>usestate Example</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button><br/>
        <br/>
        <hr/>
        
         <button onClick={()=>setlike(like+1)}>👍{like}</button>
          <button onClick={()=>setdislike(dislike+1)}>👎{dislike}</button>
    </div>
  )
}

export default State