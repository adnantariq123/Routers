import {NavLink, Outlet} from "react-router-dom"

export const Products=()=>{
    return(
        <>
        <h3> Products</h3>
        
        <nav>
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New Stuff</NavLink>
        </nav>
        {/* *************************
        OUTLET is require for nexted route
        ************************* */}
        <Outlet/>

        </>

    )
}