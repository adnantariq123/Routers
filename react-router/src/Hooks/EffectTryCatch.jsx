import { useState, useEffect } from "react"

// call data from using try catch and async await
//fetch('https://jsonplaceholder.typicode.com/users');

export const EffectTryCatch = () => {
    const [users, setUsers] = useState(null)



    useEffect(() => {
        callingAPI()
    }, [])

    const callingAPI = async () => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const response = await data.json();
            setUsers(response)
        }
        catch (error) {
            console.log("something went wrong!")
            console.log(error)
        }
    }

    useEffect(() => console.log(users), [users])


    return (
        <>
            {users?.map((user, i) => {
                return (
                    <p key={i}>{user.name}</p>
                )
            })}
        </>
    )

}