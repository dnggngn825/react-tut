import React from 'react'

class App extends React.Component {
    constructor()
    {
        super()
        this.state = {
            name: "Dang",
            age: 19
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} years old</h1>
            </div>
        )
    }
}

export default App