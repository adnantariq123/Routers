import {useContext, useState, useMemo} from 'react'
import {JsonContext} from "./DefaultDrop"

/* useMemo with useContext
FIRSTLY THIS APP IS KINDA RETARDED, WHY? because ever render seem to show TWO console.log for any single console.log in code ¯\_(ツ)_/¯
sooooo console.log("findLongestName Computed"); SHOULD show only once... BUT because this app is kinda retarded it shows up twice

THAT said useMemo is used to call a function only when it's dependency has changed
othetwise the function findLongestName would keep firing EVERYTIME ANY STATE CHANGED... WHICH IS WRONG
*/
export const MemoTutorial =()=>{

    const [fakeName, setFakeName] =useState("Fake")
    const JsonData = useContext(JsonContext)

    const findLongestName=(comment)=>{
        if(!comment) return null;

        let longestName = "";
        for (let i =0; i<comment.length; i++) {
            let currentName = comment[i].name;
            if (currentName.length > longestName.length) {
                longestName=currentName
            }
        }

        console.log("findLongestName Computed");

        return longestName;
    }

    const NameChanger=(name)=>{
        setFakeName(name)
    }

    // useMemo is used to call a function only when it's dependency has changed
    //othetwise the function findLongestName would keep firing EVERYTIME ANY STATE CHANGED... WHICH IS WRONG
    const getLongestName = useMemo(()=>findLongestName(JsonData), [JsonData])

    return (
        <>
        {/* <p>{findLongestName(JsonData)}</p> */}
        <p>{getLongestName}</p>

        <h3> MASH 4077 name - {fakeName}</h3>

        {/* otherwise every time we did a state change with setFakeName, findLongestName () would have been fired
        but Now we are using getLongestName() which improves the functionality with useMemo 
        .. and we would see the console.log firing again and again*/}
        <button onClick={()=>setFakeName("Frank")}>Frank</button>
        <button onClick={()=>setFakeName("Hawkeye")}>Hawkeye</button>
        <button onClick={()=>setFakeName("Rador")}>Rador</button>

        <p>useMemo is used to call a function only when it's dependency has changed othetwise that function  would keep firing EVERYTIME ANY STATE CHANGED... WHICH IS WRONG</p>
        </>
    )
}