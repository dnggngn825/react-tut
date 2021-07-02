import React from 'react'

class App extends React.Component {
    // for initialisse some values
    constructor() 
    {
        // access the variable from global by using 'super()'
        super()
        this.state = {
            answer: "yes"
        }
    }

    render () 
    {
        return (
            <div>
                <h1>Is state important to know? answer: {this.state.answer}</h1>
            </div>
        )
    }
}

export default App