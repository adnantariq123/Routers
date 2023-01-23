import { useState, useRef } from "react";

export const StateUser=()=>{

    const [txt,setTxt]=useState(null)
    const myRef= useRef(null)

    const textChanger=(event)=>{
        setTxt(event.target.value)
        //OR - important
        //we could have also done it like this, but for this eamp-[le we are turning it off
        //setTxt(myRef.current.value)
    }

    return (
    <>
        <h3> Use State with text input change AND useRef</h3>
        <input onChange={textChanger} ref={myRef}></input>
        <p>{txt}</p>
    </>
    )

}