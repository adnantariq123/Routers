import {NavLink} from "react-router-dom"

export const NavBar=()=>{
    return (
        <nav>
            <NavLink to="/">Home/animation</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/hooks">Hooks</NavLink>
            <NavLink to="/SomeTrinks">Some Tricky Questions</NavLink>
            <NavLink to="/redux">Redux</NavLink>
            <NavLink to="/objects">Objects</NavLink>
            <NavLink to="/promise">Promise</NavLink>
        </nav>
    )
}