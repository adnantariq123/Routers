import { useEffect } from "react";
import axios from "axios";

export const PromiseExport=()=>{

    useEffect(()=>{
        GetActivity()
        console.log("called from useEffect")
    },[])

    const GetActivity= async()=>{
        try {
            //use the https://httpstat.us/500 to cause an error
            let responce = await axios.get('http://www.boredapi.com/api/activity')
            console.log(responce.data.activity)
        }
        catch(error) {
            console.log("somethign went wrong" + error)
        }

    }

    return (
        <>
        <h3>Promises, async/await and try catches</h3>
        <h3>How does the event loop work in javascript?</h3>
        <p>"JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks."</p>
        <p>When you're doing things in js, there's basically a backlog of here's the thing that the eventQue needs to be done. These are things the evetn que needs to excute. </p>

        <h3>What are JS Promise</h3>
        <p>The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</p>
        <p>A Promise is in one of these states:</p>
        <ul>
            <li>pending: initial state, neither fulfilled nor rejected.</li>
            <li>fulfilled: meaning that the operation was completed successfully.</li>
            <li>rejected: meaning that the operation failed.</li>
        </ul>
        <p>our fav http request lib AXIOS is a promise based js lib</p>

        <h3>await</h3>
        <p>The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.</p>
        </>
    )
}