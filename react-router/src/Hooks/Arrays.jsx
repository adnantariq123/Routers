import { JsonContext } from "./DefaultDrop"
import { useState, useEffect } from "react"
import axios from "axios"


export const ArrayExample = () => {
    const [ArrayOne] = useState([1, 2, 3, 4, 5, 6, 7])
    const [ArrayTwo] = useState([1, 2, 3, 4, 8, 9, 0, 11, 16])

    const CombineArrays=ArrayOne.concat(ArrayTwo)
    const uniqueArray = Array.from(new Set(CombineArrays));

    const RemovedDuplcaiedItems=ArrayTwo.filter((element)=>{
        return !ArrayOne.includes(element)
    })




    return (
        <>
        <h4>Look at these two arrays, named ArrayOne, and ArrayTwo</h4>
        <p>Numbers: <b>1,2,3,4</b> and being duplicated or showing up in both these two different arrays</p>

        <p>ArrayOne:{ArrayOne.map((item) => {return (<>{item+ ", "}</>)})}</p>

        <p>ArrayTwo:{ArrayTwo.map((item) => {return (<>{item+ ", "}</>)})}</p>

        <p><b>To make a new Array WITHOUT any duplciation, OR combine these two </b></p> 
        <p>We first combine these two using <span style={{"color": "red"}}>.concat</span>, which returns :</p>

        <p>{CombineArrays.map((item) => {return (<>{item+ ", "}</>)})} we see duplication of the number </p>
        <h4> we use the following to REMOVE duplications <span style={{"color": "red"}}>const uniqueArray = Array.from(new Set(combineArrays));</span></h4>
        <p>We now have a New array with Unique values only... meaning no duplications</p>
        <p><b>uniqueArray: </b>{uniqueArray.map((item) => {return (<>{item+ ", "}</>)})}</p>

        <h4>Now use .sorts the array loweset to highest values <span style={{"color": "red"}}> .sort((a, b)=&gt;&#123;return a-b&#125;</span></h4>
        <p>{
            uniqueArray.sort((a, b)=>
                {return a-b}
                ).map((item) => {return (<>{item+ ", "}</>)})
            }
        </p>

        <h4>Now use .sorts the array highest to loweset values <span style={{"color": "red"}}> .sort((a, b)=&gt;&#123;return b-a&#125;</span></h4>
        <p>{
            uniqueArray.sort((a, b)=>
                {return b-a}
                ).map((item) => {return (<>{item+ ", "}</>)})
            }
        </p>

        <h4>Remove array items from another array JavaScript , we use <span style={{"color": "red"}}>.filter</span>, as well as <span style={{"color": "red"}}>!</span>array name with <span style={{"color": "red"}}>.includes</span><br/>
        <span style={{"color": "red"}}>ArrayTwo.filter((element)=&gt;&#123;</span><br/>
        &nbsp;&nbsp;&nbsp;<span style={{"color": "red"}}>return !ArrayOne.includes(element)</span><br/>
        <span style={{"color": "red"}}>&#125;)</span>
        </h4>
        <p>Therefore remove the items found in ArrayOne from ArrayTwo {RemovedDuplcaiedItems.map((item)=>{return (<>{item+ ", "}</>)})}</p>




        </>
    )


}