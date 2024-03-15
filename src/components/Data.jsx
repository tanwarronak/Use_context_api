import React from "react";
import { useContext } from "react";
import CountContext from "../contexts/Count";
const Data = ()=>{
    const {count,setCount}= useContext(CountContext);
    return <>
     <h1>{count}</h1>
      <div >
        <button onClick={()=>setCount(count+1)} >
          count is {count}
        </button>
        <p>
          this is do or die
        </p>
      </div>
 
    </>
}

export default Data