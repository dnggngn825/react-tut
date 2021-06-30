import React from 'react'

function Joke(props){
    return (
        <div>
            <h2>Question: {props.question}</h2>
            <p>Answer: {props.answer}</p>
        </div>
    )
}

export default Joke