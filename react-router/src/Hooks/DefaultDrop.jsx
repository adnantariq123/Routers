import { Outlet,NavLink } from "react-router-dom"
import { createContext , useEffect, useState } from "react"
import axios from "axios";

//dont forget to keep the createContext() part OUTSIDE the component, ALSO it needs a export
export const JsonContext = createContext ()


export const Defaulted=()=>{
    const [jsonPlaceHolderContext, setJsonPlaceHolderContext] = useState(null)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setJsonPlaceHolderContext(response.data)
        })
    },[])

    

    return (
        <nav>
        <h2> ALL hooks live here</h2>
        <NavLink to="useState">Use da State and UseRef</NavLink>
        <NavLink to="useReducer">Use Reducer</NavLink>
        <NavLink to="useEffect">Use Effect</NavLink>
        <NavLink to="useContext">Use Context</NavLink>
        <NavLink to="useMemo">Use Memo</NavLink>

        <JsonContext.Provider value={jsonPlaceHolderContext}>
        <Outlet/>
        </JsonContext.Provider>
       
        </nav>
    )
}