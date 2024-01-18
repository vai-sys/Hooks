import React, { useState } from 'react'

const Remove = () => {
    const biodata=[
        {id:0,Task: 'Drink Water '},
        {id:1,Task:'Study'},
        {id:2,Task :'college Assignment'} ,
    ]
    const [task,settask]=useState(biodata);
    const removeTask =(id)=>{
        const newarray=task.filter((curElem)=>{
             return (curElem.id!==id)
            
        })
        settask(newarray);
    }
  return (
    <div>
       <div className='Remove'> 
  {
    task.map((cur) => (
      <div key={cur.id}>
        <h3>Task: {cur.Task}</h3>
        <button onClick={() => removeTask(cur.id)}>Remove</button>
      </div>
    ))
  }
</div> 
</div>
  )
}

export default Remove

