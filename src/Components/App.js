import React from 'react'
import MainContent from "./MainContent"

// function App(){
//     const firstName = "Dang"
//     const lastName = "Nguyen"



//     return (
//         // <h1>Hello {firstName + " " + lastName}</h1>
//         <h1>Hello {`${firstName} ${lastName}`}</h1> // => ES 6 syntax
//     )
// }

function App(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const style = {
        color: "green", 
        backgroundColor:"#333",
        // fontSize: 20 ---> this is in pixel, doesnt need " "
        fontSize: "10em" // if we dont put " " then it is in pixels, else we need to have " "
    }

    if (hours < 12)
    {
        timeOfDay = "morning";
        style.color = "green"
    } else if (hours >=12 && hours < 17) {
        timeOfDay = "afternoon";
        style.color = "red"
        style.fontSize = "3em"
    } else {
        timeOfDay = "night";
        style.color = "blue"
    }

    
    return (
        <div>
            <h1 style = {style}>Good {timeOfDay}</h1>
            <h1>It is currently about {date.getHours() } o'clock</h1>
        </div>
    )
}




export default App