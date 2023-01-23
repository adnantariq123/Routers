import { useEffect, useState, useLayoutEffect } from "react"
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

    // this is called BEFORE the useEffect ()
    useLayoutEffect(()=>{
        console.log("Notice value of axiosData (state) was null, BECAUSE it runs BEFORE the useEffect was fired : "+axiosData)
    }, [])

    return(
        <>
        <h3> use Effect added useLayoutEffect() </h3>
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