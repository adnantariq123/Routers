export const ObjectTwo = () => {

    //human is the basic class
    class Human {
        constructor() {
            this.gender = "anything";
        }
        printGender = () => console.log("The gendder is :" + this.gender); 
        printMyName = () => console.log(this.name);
        printMyAge = () => console.log(this.name + " is " + this.age + " years old \n");
    }

    // person is extending the human class
    class Person extends Human {
        constructor(name, sex, age) {
            super();
            this.name = name;
            this.gender = sex;
            this.age = age;
        }
    }

    const MasterDeveloper = new Person("Adi - Master Developer", "male", 39);
    MasterDeveloper.printGender()
    MasterDeveloper.printMyName()

    const oriana = new Person("Oriana", "female", 35);
    oriana.printGender()
    oriana.printMyAge()
    


    return (
        <>
            <h4>CLASS extending another class</h4>
            <p>The extends keyword is used in <b>class</b> declarations or class expressions to <b>create a class that is a child of another class</b>.</p>
            <p>That class might be made of object</p>
            <p>In this example we have two <b>const</b> MasterDeveloper and oriana.  Pay close attention to the <span style={{"color": "red"}}>new Person</span> and then passing in the parameters</p>
        </>
    )

}