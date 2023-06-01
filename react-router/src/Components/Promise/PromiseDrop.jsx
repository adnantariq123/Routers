import { NavLink,Outlet } from "react-router-dom";

export const ProDrop=()=>{
    return(
        <>
        <NavLink to="promise1">Promise 1 </NavLink>
        <NavLink to="promise2">Promise Pedro</NavLink>

        <Outlet/>
        </>
    )
}