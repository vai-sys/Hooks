import React, { useReducer } from 'react'
const Reducer=(state,action)=>{
    if(action.type==='increment'){
        return state+1;
    }
    else{
        return state-1;
    }
}
 const initialState=0;

const UseReducer = () => {
    const[state,dispatch]=useReducer(Reducer,initialState)
  return (
    <div>
        <p>{state}</p>
        <button onClick={()=>dispatch({type :'increment'})}>Inc</button>
        <button onClick={()=>dispatch({type :'decrement'})}>dec</button>

      
    </div>
  )
}

export default UseReducer
