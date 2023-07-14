export const ObjectBinding=()=>{

    let c1= {
        firstName:"Adnan",
        y:10
    }

    let c2= {
        firstName:"John",
        y:20
    }

    // fat arrow will not work, you need the REGULAR function
    //const printCordinate=()=> {
    function printCordinate (greet){
        //console.log(greet + " " + this.firstName)
        return(greet + " " + this.firstName)
    }

    // this would not work as it would be refering to the windows object
    //printCordinate()

    // but this will
    const C1_function=printCordinate.bind(c1)
    

    const C2_function=printCordinate.bind(c2)
    

    
    // look at this call, we are simply calling that function. VS above we first made a new function C1_function and C2_function and THEN we had to fire them
    printCordinate.call(c1, 'Hello'); // Hello Jon Kuperman
    printCordinate.call(c2, 'Hello'); // Hello Jon Kuperman



    function doMaths() {
        //console.log(this.a+this.b)
        return this.a+this.b
    }

    const v1 ={a:1, b:2}
    const v2 ={a:11, b:22}
    const v3 ={a:55, b:12}


    // look how simple it was to add the functionality to reach of these objects
    doMaths.call(v1)
    doMaths.call(v2)
    
    


    return(
        <>
        <h4>what is bind, call, apply</h4>
        <p>Bind is simply binding an object to an function</p>
        <p>and then you are refering that object with 'this' keyword</p>
        <p><b>but be very careful as fat arrow function will not work with it, you have to use a old function declration</b></p>
        <p> for bind you have to delcare a new function look at <span style={{"color": "red"}}>const C1_function=printCordinate.bind(c1)</span> THEN you have to fire that new function <span style={{"color": "red"}}>C1_function()</span></p>

        <p>{C1_function("whatever")}</p>
        <p>{C2_function()}</p>

        
        

        <p><b>Call</b> invokes the function and allows you to pass in arguments. It is useful for adding extra functionality WITHOUT add a new method to that object itself. 
        ALSO the <b>call</b> function fires the function like it normally would but it would also specify the object represented OR retrived by the this keyword</p>
        <p>{doMaths.call(v1)}</p>
        <p>{doMaths.call(v2)}</p>
        <p>{doMaths.call(v3)}</p>

        <p>Apply invokes the function and allows you to pass in arguments as an array.</p>
        <p>Bind returns a new function, allowing you to pass in a this array and any number of arguments.</p>
        </>
    )
}