export const ObjectBinding=()=>{

    let c1= {
        x:5,
        y:10
    }

    let c2= {
        x:15,
        y:20
    }

    // fat arrow will not work, you need the REGULAR function
    //const printCordinate=()=> {
    function printCordinate (){
        console.log(this.x)
    }

    // this would not work as it would be refering to the windows object
    //printCordinate()

    // but this will
    const C1_function=printCordinate.bind(c1)
    C1_function()

    const C2_function=printCordinate.bind(c2)
    C2_function()

    return(
        <>
        <h4>what is bind</h4>
        <p>Bind is simply binding an object to an function</p>
        <p>and then you are refering that object with 'this' keyword</p>
        <p><b>but be very careful as fat arrow function will not work with it, you have to use a old function declration</b></p>

        <p> </p>
        </>
    )
}