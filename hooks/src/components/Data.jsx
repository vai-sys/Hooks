import React, { useState } from 'react';

const Data = () => {
    const BioData = [
        { Name: 'vaishnavi', Roll: 17 },
        { Name: 'neeta', Roll: 52 },
    ];

    const [Array, setArray] = useState(BioData);

    const clear = () => {
        setArray([]);
    };

    return (
        <div >
            <div className='data'>
            {Array.map((current) => {
                return (
                    
                    <h2 key={current.Roll}  className='box'>
                        Name : {current.Name}  
                        Roll Number : {current.Roll}
                    </h2>
                );
            })}
            <button onClick={clear}>Clear</button>
            </div>
           
        </div>
    );
};

export default Data;

