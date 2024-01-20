import React, { useState } from 'react';

const Loginform = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [Entry, setEntry] = useState([]);
  const [Showdata,setShowData]=useState([]);

  // const submitform = (e) => {
  //   e.preventDefault();
  //   if(email && password){
  //     const newEntry = { id : new Date().getTime().toString,email: email, password: password };
  //     setEntry([ newEntry]);
  //     setemail(''); 
  //     setpassword('');
  //   }
  //   else{
  //     alert(" Please fill the data")
  //   }
   
  // };
  const submitform = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email: email, password: password };
      setEntry([newEntry]);
      setemail('');
      setpassword('');

      

       
      setShowData(true);
      setTimeout(() => {
        setShowData(false); 
      }, 2000); 
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div>
      <form onSubmit={submitform}>
        <div>
          <label htmlFor="email" style={{padding:'30px'}}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="Password" style={{padding:'22px'}}>Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* <div className='data'>
        {Entry.map((currentElem) => (
          <div key={currentElem.id}>
           <p> Email: {currentElem.email}</p>
           <p> Password: {currentElem.password}</p>
          </div>
        ))}
      </div> */}
     <div className='data'>
     {Showdata && (
        <div>
          {Entry.map((currentElem) => (
            <div key={currentElem.id}>
              <p>Email: {currentElem.email}</p>
              <p>Password: {currentElem.password}</p>
            </div>
          ))}
        </div>
      )}
     </div>
    </div>
  );
};

export default Loginform;



