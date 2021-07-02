import React from 'react'

function handleClick() {
    console.log("I was clicked")
}

function mouseOverEvent() {
    console.log("Mouse over image")
}

function App() {
    return (
        <div>
            <img onMouseOver={mouseOverEvent} src="https://www.fillmurray.com/200/100" alt="hahah"/>
            <br />
            <br />
            <button onClick = {handleClick}>Click me</button>
        </div>
    )
}

export default App