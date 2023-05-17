import { NavLink,Outlet } from "react-router-dom";


export const ObjectsnStuff = () => {
    


    return (
        <>

        <NavLink to="object1">Object 1 </NavLink>
        <NavLink to="object2">Object 2</NavLink>
        <NavLink to="object3">Object 3</NavLink>
        <NavLink to="objectBinding">object Binding</NavLink>

        <Outlet/>


        </>
    )
}