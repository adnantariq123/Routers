export const ObjectOne=()=>{

    const obj = {
        name: "Adnan",
        age: "43",
        "wired-Key-Name": "Very wired",
        sayMyName: function() {
            console.log(this.name)
        }
    }
    delete obj.age;
    console.log(obj)
    console.log(obj["wired-Key-Name"])
    obj.sayMyName()
    //console.log(obj.values())
    //const set = new Set(obj)

    return (
        <>
            <h4>Objects, Set, and other Data Structure and algorithm look at the Console, and notice </h4>
            <ul>
                <li>the age went missing(use <b>delete obj.age;</b>)</li>
                <li>call the "Very wired" using obj["wired-Key-Name"] </li>
                <li>Call the function sayMyName()</li>
            </ul>
            <p>An object is an unordered collection of key-value paris, and the keys must be a string or symbol data type.
                Objects are not iterable, meaning you cannot use a for loop on it, like you ould for an array</p>
            <p>Searching and Deleting an element from a Set is faster compared to Arrays... nice to know</p>

        </>
    )
}


