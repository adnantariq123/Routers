import { useState, useEffect } from "react"
export const Pro3=()=> {

    const [users, setUsers] = useState(null);


    //just play around with promise
    const getData =()=>{
        return new Promise (resolve=>{
            setTimeout (()=>{
                resolve(55)
            },1)
        })
    }

    const calling = async ()=>{
        const result = await getData()
        console.log(result)
    }

    //  THIS FUNCTION CALLTHEN IS THE SAME AS CALLING FUNCTION
    const callThen =async ()=> {
        getData().then((result)=>{
            console.log(result)
        })
    }

    calling()
    callThen()

    const startCallingApi =async ()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await data.json()
        console.log(result)
    }
    startCallingApi()

    // the following again is the SAME as the above but using the .then appraoch

    //const startCallingTHEN = async ()=>{
    async function startCallingTHEN(){
        fetch('https://jsonplaceholder.typicode.com/users')
            /* this block of could did NOT work
            .then((data)=> {   <= putting it in the {} will return a undefined
                data.json()
            })                 <== what the serious fuck javascript!!!
            */
            .then (data=>data.json()) // got to live in one line
            .then((result)=> {
                console.log(result)
            })
            .catch((error)=>{
                console.log("what is the error?")
                console.log(error)
            })
    }

    startCallingTHEN()

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response =  await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
                console.log("coming from useEffect")
                console.log(data)
            }
            catch (error){
                console.log("got some error")
            }

        }

        fetchData()

    }, [])



    
    return(
        <>
        <h3> just for excerise</h3>
        <p>THIS FUNCTION CALLTHEN IS THE SAME AS CALLING FUNCTION</p>

        {users?.map((user, i)=> {
            return(
                <p key={i}>{user.name} </p>
            )
        })}

        </>
    )
}