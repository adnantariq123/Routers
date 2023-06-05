import { useState, useEffect } from "react"

// call data from using try catch and async await
//fetch('https://jsonplaceholder.typicode.com/users');

export const EffectTryCatch = () => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)



    useEffect(() => {
        callingAPI()
    }, [])

    const callingAPI = async () => {
        // I am forcing a 3 second delay
        setTimeout( async() => {
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/users');
                const response = await data.json();
                setLoading(false)
                setUsers(response)
            }
            catch (error) {
                console.log("something went wrong!")
                console.log(error)
                setLoading(false)
                setHasError(true)
            }
        }, 2000)
    }

    useEffect(() => console.log(users), [users])


    return (
        <>
            {loading && hasError===false ? <h3>loading...</h3>
            :
            users?.map((user, i) => {
                return (
                    <p key={i}>{user.name}</p>
                )
            })
            }
            {hasError? <h3> Came to error block!</h3>:<></>}
            
            
            
        </>
    )

}