import React from "react";
import Joke from "./Joke";
import jokeData from './jokeData'

function MainComponents() {
    const jokeComponent = jokeData.map(function(joke) {
        return (<Joke key={joke.id} question={joke.question} answer={joke.answer}/>)
    })

    console.log(jokeComponent)
	return (
		<div>
			{jokeComponent}
		</div>
	);
}

export default MainComponents;
