import { useState, useRef } from "react";

export const StateUser=()=>{

    const [txt,setTxt]=useState(null)
    const myRef= useRef(null)

    const textChanger=(event)=>{
        setTxt(event.target.value)
        //OR - important
        //we could have also done it like this, but for this example and we are turning it off
        //setTxt(myRef.current.value)
    }

    // this is a better exmaple of useRef
    const focusInput=()=>{
        myRef.current.focus()
    }

    const clearInput=()=>{
        setTxt(null)
        myRef.current.focus()
        myRef.current.value=""
        
    }

    return (
    <>
        <h3> Use State with text input change AND useRef</h3>
        <input onChange={textChanger} ref={myRef} ></input>
        <h1>{txt}</h1>
        <button onClick={focusInput}> Click btn to focus input (myRef)</button>
        <button onClick={clearInput}> Clear Input</button>
    </>
    )

}