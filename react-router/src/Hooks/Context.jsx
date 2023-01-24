import {useContext} from 'react'
import {JsonContext} from "./DefaultDrop"

export const Context=()=>{

    const JsonData = useContext(JsonContext)

    return (
        <>
        <br/><br/>
        <table>
            <thead>
                <tr> 
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {JsonData?.map((x)=>{
                    return <tr key={x.id}> 
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                                <td>{x.body}</td>
                            </tr>
                })}
            </tbody>
        </table>

        </>
    )
}

//VERY IMPORTANT FOR LAZY LOADING YOU NEED THE DEFAULT
export default Context