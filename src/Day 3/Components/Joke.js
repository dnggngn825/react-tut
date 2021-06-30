import React from 'react'

function Joke(props){
    return (
        <div>
            <h2 style={{display: !props.question && "none"}}>Question: {props.question}</h2>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.answer}</h3>
        </div>
    )
}

export default Joke