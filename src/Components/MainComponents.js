import React from "react";
import Joke from "./Joke";

function MainComponents() {
	return (
		<div>
			<Joke question="q1" answer="This is the answer" />
			<Joke question="q2" answer="This is the answer" />
			<Joke question="q3" answer="This is the answer" />
			<Joke question="q4" answer="This is the answer" />
			<Joke question="q5" answer="This is the answer" />
		</div>
	);
}

export default MainComponents;
