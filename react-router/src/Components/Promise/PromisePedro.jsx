import { useEffect } from "react";
import axios from "axios";

export const PedroPromise=()=>{

    useEffect(()=>{
        const SomeEvent = new Promise ((resolve, reject)=> {

            var name ="Pedro";
            if(name ==="Adnan") {
                resolve()
            }else {
                reject(" name not there brah")
            }
        })

        //basic set up

        //SomeEvent.then().catch()
        SomeEvent
            .then(
                (name)=>{console.log("Sucessful : " + name)}
            ).catch(
                (error)=>{console.log(error)}
            )

        
        // SAME way to write with async
        //async function fetchData() {}

        // fat Arrow async
        const fetchData= async ()=>{
            try {
                //try to force an error to get to the catch block
                const data = await axios.get('http://www.boredapi.com/api/activity')
                console.log(data)
            }
            catch (err) {
                console.log("Brah got an error")
            }
        }
        fetchData()
    }
    ,[])
    return(
        <>
        <h3> Async / await</h3>
        <p>pedro</p>
        </>
    )
}