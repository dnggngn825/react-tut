import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state={
            unreadMessages: [
                "Call your mom!",
                "New spam email available"
            ]
        }
    }

    render() {
        return (
            // <div>
            //     {this.state.unreadMessages.length === 0?
            //     <h2>It's up-to-date</h2> : 
            //     <h2>You have {this.state.unreadMessages.length} unread messages</h2>}
            // </div>


            <div>
                {this.state.unreadMessages.length > 0 && <h2>You have {this.state.unreadMessages.length} unread messages</h2>}
            </div>
        )
    }
}

export default App