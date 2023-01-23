import { Outlet,Link } from "react-router-dom"

export const Defaulted=()=>{
    return (
        <>
        <h2> ALL hooks with live here</h2>
        <Link to="useState">Use da State</Link>
        <Link to="useReducer">Use Reducer</Link>
        <Outlet/>
        </>
    )
}