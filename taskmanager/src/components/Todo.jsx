import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { useState } from 'react';
import { MdEdit } from "react-icons/md";


const Todo = () => {
  const [InputData, setInputData] = useState('');
  const [Items, setItems] = useState([]);

  const editItem=(index)=>{
    let newEditedItem=Items.find((elem)=>{
        return elem.id=index;
    })
    console.log(newEditedItem);

  }
// delete item
   const deleteItem=(index)=>{
    const updatedItems=Items.filter((ele)=>{
        return index!==ele.id;

    })
    setItems(updatedItems);

  }
//   delete all items;
  const Remove=()=>{
    setItems([]);
  }
//   Add item

  const AddItem = () => {
    if (InputData === '') {
      // Handle empty input, if needed
    } else {
        const allInputData={id:new Date().getTime().toString(),name:InputData}
      setItems([...Items, allInputData]);
      setInputData('');
      
    }
    
  };
 

  return (
    <div className='body'>
      <div className='main-div'>
        <div className='child-div'>
          <h3>Add your List here.. 👉</h3>
          <div className='addItem'>
            <div className='inputWithIcon'>
              <input
                placeholder='✍️ write here'
                value={InputData}
                onChange={(e) => {
                  setInputData(e.target.value);
                }}
              />
              <IoIosAdd onClick={AddItem} />
            </div>
            <div className='showItems'>
              {Items.map((elem, index) => (
                <div className='eachItem' key={elem.id}>
                  <p>{elem.name}</p>
                  <div className='btn'>
                  <MdDeleteOutline  className='delete' onClick={()=>{deleteItem(elem.id)}} />
                  < MdEdit  className ='edit' onClick={()=>{editItem(elem.id)
                  }}/>
                  </div>
                  
                </div>
              ))}
            </div>
            <div className='btns'>
              {/* <button>Check List</button> */} 
              <button onClick={Remove}>Remove All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;



