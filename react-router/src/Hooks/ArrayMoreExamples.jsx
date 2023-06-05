import { useState,useEffect } from "react"
import axios from "axios"

export const ArrayMoreExamples =()=>{

    const [toDo,setToDo] = useState([])

    useEffect (()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=> {
            setToDo(response.data.slice(0,20))
        })
    },[])

    useEffect(()=>console.log(toDo), [toDo])    
    return (
        <>

    <h4>Sort the toDo(taken from a dummy API) array of objects aganist the completed property</h4>
            <table>
               
            {
                toDo.sort((a,b)=>
                {return b.completed - a.completed}
                ).map((item,i) => {
                    return (<tr key={i}>
                    <td>{item.completed.toString()}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    </tr>)
                })
            }
             
            </table>
        </>
    )
}