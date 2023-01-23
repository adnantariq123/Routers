import { useEffect, useState } from "react"
import axios from "axios";

export const Effective =()=>{
    const [axiosData, setAxiosData]=useState(null)

    useEffect (()=>{
            // console.log("sup")
            axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response)=>{
                console.log(response.data)
                setAxiosData(response.data.slice(0,10))
            })
    },[])

    return(
        <>
        <h3> use Effect</h3>
        <table>
            <tbody>
            {axiosData?.map((data)=>{
                return <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.email}</td>
                    <td>{data.name}</td>
                </tr>
            })}
            </tbody>
        </table>
        </>
    )
}