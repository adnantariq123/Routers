import { Link, Outlet, useSearchParams } from "react-router-dom"

export const Users=()=>{

    const UserLength =[1,2,3,4,5,6]

    // aaah did not understand this useSearchParams thingy
    const[searchParams, setsearchParams]=useSearchParams()
    const showActiveUsers = searchParams.get('filter')==="active"

    return(
        <>
        
        <ul>

        {UserLength.map(user=>(
            <li key={user}><Link to={user.toString()}>User {user}</Link></li>
        ))}


        {/* <li><Link to={"1"}>User 1</Link></li>
        <li><Link to={"3"}>User 2</Link></li>
        <li><Link to={"3"}>User 3</Link></li> */}

        </ul>

        <button onClick={()=>{setsearchParams({filter:'active'})}}>Active User</button>
        <button onClick={()=>{setsearchParams({})}}>Reset Filter</button>

        {
            showActiveUsers? (
                <h4> Showing Active users?</h4>
            ): (
                <h4> OR.. not showing Active users?</h4>
            )

        }

        <Outlet/>
        </>
    )
}