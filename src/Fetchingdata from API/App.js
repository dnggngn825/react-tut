import React from 'react'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: false,
            character: {}
        }
    }

    // this will run right after it mounted to the DOM
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/1")
            .then(Response => Response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        const text = this.state.loading ? "loading" : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App