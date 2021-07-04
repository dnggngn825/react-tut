import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state={
            isLoggedIn: true
        }
        this.handleChange = this.handleChange.bind(this)   
    }

    handleChange(){
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let displayText =  this.state.isLoggedIn? "Logged in" : "Logged out"
        let label = this.state.isLoggedIn? "Log out" : "Log in"
        return (
            <div>
                <h1>{displayText}</h1>
                <button onClick={this.handleChange}>{label}</button>
            </div>
                
        )
    }
}

export default App