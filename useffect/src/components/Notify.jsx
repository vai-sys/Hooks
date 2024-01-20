import React, { useEffect, useState } from 'react'

const Notify = () => {
    const[count,setcount]=useState(0);
    useEffect(()=>{
        if(count>1){
            document.title=` Chat ${count}`
        }
        else{
            document.title=` Chat `
        }
       
    })
  return (
    <div>
        <button onClick={()=>{
            setcount(count+1);
        
        }}>Click</button>
        <h3>{count}</h3>
      
    </div>
  )
}

export default Notify
