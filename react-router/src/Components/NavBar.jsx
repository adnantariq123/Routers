import {NavLink} from "react-router-dom"

export const NavBar=()=>{
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/hooks">Hooks</NavLink>
        </nav>
    )
}