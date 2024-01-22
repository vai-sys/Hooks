import React, { useRef, useState } from 'react';

const UncontrolledForm = () => {
  const Luckname = useRef(null);
  const [show, setshow] = useState(false);

  const submitfunction = (e) => {
    e.preventDefault();
    const name = Luckname.current.value;
    name === "" ? setshow('Please fill the data') : setshow(`Your name is ${name}`);
  };

  return (
    <div>
      <form onSubmit={submitfunction}>
        <label htmlFor='Luckname'>Name:</label>
        <input type='text' id='Luckname' ref={Luckname}></input>
        <button>Submit</button>
      </form>
      <p>{show ? show : 'Fill the data'}</p>
    </div>
  );
};

export default UncontrolledForm;


