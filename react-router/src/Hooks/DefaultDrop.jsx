import { Outlet,NavLink } from "react-router-dom"

export const Defaulted=()=>{
    return (
        <nav>
        <h2> ALL hooks live here</h2>
        <NavLink to="useState">Use da State and UseRef</NavLink>
        <NavLink to="useReducer">Use Reducer</NavLink>
        <NavLink to="useEffect">Use Effect</NavLink>
        <Outlet/>
        </nav>
    )
}