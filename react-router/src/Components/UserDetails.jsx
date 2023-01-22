import { useParams } from "react-router-dom"

export const UserDetail=()=>{

    const param =useParams()
    const UserId = param.userDetail
    return(
        <>
        <h3>... and this is a user {UserId} details page</h3>
        </>
    )
}