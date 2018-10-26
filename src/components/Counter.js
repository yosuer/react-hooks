import React, { useState, useEffect } from 'react';

const Counter = () =>  {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Click counter  ', count);
    });

    return (
        <div>
            <p>Clicks: {count}</p>
            <button onClick={ () => setCount(count + 1)}>
                Click
            </button>
        </div>
    )
}

export default Counter;
