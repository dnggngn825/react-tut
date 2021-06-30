import React from 'react'
import MainContent from './MainContent'

// function App () {
//     return (
//         <h1>{props.whatever}</h1>
//     )
// }

// set up a prototype with react component
class App extends React.Component {

    yourOwnMethod() {
        return 1
    }

    render() {
        const style = this.yourOwnMethod()

        // Compare to function based method, this one has to have this.props
        return (
            <h1>{this.props.whatever}</h1>
        )
    }
}

export default App