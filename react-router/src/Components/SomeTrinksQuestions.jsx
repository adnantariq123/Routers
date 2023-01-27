export const SomeTrinksQuestions = ()=>{

    var person = {
        name: "Jadugar",
        hello : function (value) {
            console.log(this.name + " says hello "+value)
        }
    }

    person.hello("world")

    var alterEgo = {
        name:"Adi"
    }

    // CALLS takes an Object which becomes the context for a particular function (in this case hello function... and the new object here is alterEgo)
    person.hello.call(alterEgo,"Sup World")

    var named={
        name:"Adnan"
    }

    person.hello.bind(named)


    return (
        <>
        <h3> Some Tricky Javascript Questions</h3>
        <p> take a look at the console.log</p>
        </>
    )
}