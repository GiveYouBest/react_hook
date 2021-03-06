import React, { useState,createContext,useContext } from 'react'

const CountContext = createContext();

function Counter() {
    let count = useContext(CountContext)

    return(
        <h1>{count}</h1>
    )
}

function Example2() {
    const [count,setCount] = useState(0)

    return (
        <div>
             <p>You clicked{count} times</p>
             <button onClick={()=>{setCount(count + 1)}}>Click Me</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example2

