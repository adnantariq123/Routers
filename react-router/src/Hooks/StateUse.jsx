import { useState } from "react";

export const StateUser=()=>{

    const [txt,setTxt]=useState(null)

    const textChanger=(event)=>{
        setTxt(event.target.value)
    }

    return (
    <>
        <h3> Use State with text input change</h3>
        <input onChange={textChanger}></input>
        <p>{txt}</p>
    </>
    )

}