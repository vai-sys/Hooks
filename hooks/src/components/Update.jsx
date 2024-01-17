import React, { useState } from 'react'

const Update = () => {
    // const data=[ {
    //     Name:'vaishnavi Thorat',
    //     Age:19,
    //     qualifacation:'Btech',
    // }]
    // const [object,setobject]=useState(data[0]);
    const [object,setobject]=useState( {
            Name:'vaishnavi Thorat',
            Age:19,
            qualifacation:'Btech',
        }) 
  
    const changeData=()=>{
        setobject({...object,Age :20})
    }
  return (
    <div className='update'>
       <div>
       <h2>Name : {object.Name}  </h2>
        <p>Age : {object.Age}</p>
        <p>Qualification : {object.qualifacation}</p>
        </div>
        <div>
            <button onClick={changeData}>Update</button>
        </div>
      
    </div>
  )
}

export default Update
