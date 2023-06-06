import { useState, useEffect } from "react"

// call data from using try catch and async await
//fetch('https://jsonplaceholder.typicode.com/users');

export const EffectTryCatch = () => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [inputTxt, setInputTxt]=useState("")
    const [showUsers, setShowUsers]=useState(null)



    useEffect(() => {
       callingAPI()
    }, [])

    const callingAPI= async ()=>{

        setTimeout (async()=>{
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/users');
                const responses =  await data.json()
                setLoading(false)
                setUsers(responses)
            }
            catch(error) {
                setLoading(false)
                setHasError(true)
                console.log(error)
    
            }
        }, 3000)

    }

    const ChangeTxt=(evt)=>{
        //console.log(evt.target.value)
        setInputTxt(evt.target.value)
    }

    const btnClicked =()=>{
        console.log(inputTxt)
        console.log(users)
        // const data = users.filter((user)=>{
        //     if (user.name==="Ervin") {
        //         return user
        //     }
        // })
        // let magenicVendors = users?.filter( user => user.name === "Ervin" )
        // console.log(magenicVendors)
        //setShowUsers(data)
        const data = findArrayElementByTitle(users,inputTxt )
        console.log(data)

    }

    function findArrayElementByTitle(array, title) {
        return array.find((element) => {
          return element.name === title;
        })
      }



    useEffect(() => setShowUsers(users), [users])


    return (
        <>
            <div className="content">
            {loading? <h3 className="loadingFlasher">Loading...</h3>
            :
            <>
            <span className="side">
            {showUsers?.map((user, i)=>{
                return(
                    
                    <p key={i} className="bullet">{user.name}</p>
                    
                )
            })}
            </span>
            <span className="side">
                <input value={inputTxt} onChange={ChangeTxt}/>
                <button onClick={btnClicked}>Find user</button>
            </span>

            </>}
            
            {hasError? 
            <div className="errorBlock">
                <h3 className="hasError">has error :(</h3>
            </div>:<></>}
            
            </div>
        </>
    )

}