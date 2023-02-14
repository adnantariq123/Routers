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

    const sumOFALL=(...argumentsALL)=>{
        let total = 0;

        for(let i=0; i <argumentsALL.length; i++) {
            total += argumentsALL[i]
        }

        return total

    }
    const StringFinder=(StringOne, StringTwo)=>{
        const One = StringOne.toLowerCase()
        const Two = StringTwo.toLowerCase()

        if(One.includes(Two)===true) {
            return "Right!"
        }
        else {
            return "Wrong!"
        }
    }

    StringFinder("Mary had a litte Dragon", "Dragon")
    

    return (
        <>

        <h4>Write a function that takes <u>ANY number of arguments</u> and returns that <u>sum</u> of all those arguemnts</h4>
        <p>use the spread operator in the function </p>
        <p>sumOFALL=(<b>...argumentsALL</b>)</p>
        <p>{sumOFALL(1,2,3)}</p>
        <p>{sumOFALL(1,2,3,4,5)}</p>
        <p>{sumOFALL(1,2,3,4,5,6,7,8,9)}</p>
        <p>{sumOFALL(100,200,300)}</p>

        <hr/>
        <h4>Write a fucntion that take two string, A and B and returns a Right! or a Wrong! weather B is inside A in a 'case-INsensitive way' </h4>
        <p>StringFinder("Mary had a litte Lamb", "Dragon")</p>
        <p>{StringFinder("Mary had a litte Lamb", "Dragon")}</p>

        <br/>
        <p>StringFinder("Mary had a litte LAMB", "lamb")</p>
        <p>{StringFinder("Mary had a litte LAMB", "lamb")}</p>
        <h4/>


        <h4> Some Tricky Javascript Questions</h4>
        <p> take a look at the console.log</p>




        </>

        
    )
}