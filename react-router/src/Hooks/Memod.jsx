import {useContext, useState, useMemo} from 'react'
import {JsonContext} from "./DefaultDrop"

// PAY ATTENTION TO CALLING THE FUNCTIONAL COMPONENT WITHOUT THE {}
// WHY IS THAT BECAUSE THE "./MemoChild" HAS A 
// export default
import MemoChild from "./MemoChild"

/* useMemo with useContext
FIRSTLY THIS APP IS KINDA RETARDED, WHY? because ever render seem to show TWO console.log for any single console.log in code ¯\_(ツ)_/¯
sooooo console.log("findLongestName Computed"); SHOULD show only once... BUT because this app is kinda retarded it shows up twice -
 ISSUE FIEXED! react.StrikMode was causing this

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



    // useMemo is used to call a function only when it's dependency has changed
    //othetwise the function findLongestName would keep firing EVERYTIME ANY STATE CHANGED... WHICH IS WRONG
    //const getLongestName =findLongestName(JsonData) EXAMPLE WITHOUT useMemo
    const getLongestName = useMemo(()=>findLongestName(JsonData), [JsonData])
    // try the line below without the useMemo to see in console
    //const getLongestName = findLongestName(JsonData)
    // After testing comment it out ^_^

    return (
        <>
        <h1>useMemo vs MEMO (for memo there is a child component)</h1>
        {/* <p>{findLongestName(JsonData)}</p> */}
        <p>{getLongestName}</p>

        <h3 style={{"color": "red"}}>useMemo</h3>
        <h4>MASH 4077 name - {fakeName}</h4>

        {/* otherwise every time we did a state change with setFakeName, findLongestName () would have been fired
        but Now we are using getLongestName() which improves the functionality with useMemo 
        .. and we would see the console.log firing again and again*/}
        <button onClick={()=>setFakeName("Frank")}>Frank</button>
        <button onClick={()=>setFakeName("Hawkeye")}>Hawkeye</button>
        <button onClick={()=>setFakeName("Rador")}>Rador</button>

        <p>useMemo is used to call a function only when it's dependency has changed othetwise that function  would keep firing EVERYTIME ANY STATE CHANGED... WHICH IS WRONG</p>

        <h3 style={{"color": "red"}}>Just MEMO</h3>
        <MemoChild/>
        <p>in the MemoChild component <b>toggle</b> or <b>remove</b> the <span style={{"color": "red"}}>memo(</span>MemoChild<span style={{"color": "red"}}>)</span> from the export default line to see the difference in console logs, and keep clicking the Frank, Haweye, Rador btns</p>
        <p>Basically memo looks at the props, and it will only re-render the child component if that props required are changing. This is a way of optimizing the code! </p>
        </>
    )
}