import { createContext } from "react";
export const countercontextobj=createContext();
import { useState } from "react";


function CounterContext({children}) {
    const [counter,setCounter]=useState(100)
  return (
    <div>
        <countercontextobj.Provider value={{counter,setCounter}}>
            {children}
        </countercontextobj.Provider>
    </div>
  )
}

export default CounterContext