
export const ObjectThree=()=>{

    const developer={
        fName: "Ahmed",
        lName:"Tariq",
        address: "123 street",
        luckyNumber:8
    }

    // in straight JS it would be for (KEY in developer) { BUT sine we are in React it has to be for (developer.key in developer) {
    for (developer.key in developer) {
        console.log(developer.key)
    }
    console.log("\n\n")
    for (developer.key in developer) {
        console.log(developer[developer.key])
    }

    console.log("\n\n")
    const multiplebyTwo=(obj)=>{
        for (obj.key in obj) {
            if (typeof obj[obj.key]==="number") {
                obj[obj.key] *=2
                console.log (obj[obj.key])
            }
        }
    }

    multiplebyTwo(developer)

    return(
        <>
        <h4>Loop through an object - console.log it and check for numer value if yes, then multiple those values</h4>
        <p>in straight JS it would be for (KEY in developer) BUT since we are in React it has to be for (developer.key in developer)</p>
        <p>in order to loop through all property of an object use <b><span style={{"color": "red"}}>for</span> (<span style={{"color": "red"}}>developer.key in</span> developer)</b>- developer is just an object</p>
        
        <p>to loop through the object and display the values - developer[developer.key]. BUT this shit adds an extra key.</p>

        <br></br>
        <p> for multiple by two -  we first loop through that obj and then check if any property is a number</p>

        </>
    )
}