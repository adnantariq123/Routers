import { Link, Outlet } from "react-router-dom"

export const Users=()=>{
    return(
        <>
        <ul>
        
        <li><Link to={"1"}>User 1</Link></li>
        <li><Link to={"3"}>User 2</Link></li>
        <li><Link to={"3"}>User 3</Link></li>
        </ul>

        <Outlet/>
        </>
    )
}