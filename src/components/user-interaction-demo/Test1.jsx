import { useState } from "react";
import Teest2 from "./Teest2";

function Test1() {
    let [counter,setCounter]=useState(100)

    function handleincreament(){
        setCounter(counter+1)
    }
    return (
    <div className="text-center bg-primary p-4">
        <h1>Parent</h1>
        <p className="display=3">counter:{counter}</p>
        <button className="btn btn-warning" onClick={handleincreament}>++</button>
        <Teest2 counter={counter} handleincreament={handleincreament}/>
    </div>
  )
}

export default Test1