import React from 'react'

class App extends React.Component {
    constructor()
    {
        super()
        this.state = {}
    }

    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are, some kind of data
    }

    // like saying "youre just born" -> API call, get data from external source
    // this is run once
    componentDidMount() {
        // get the data I need to correctly display
    }

    // Like someone give you gift
    // when it receive props, it will run this
    // it will run whenever the parent decide to hand a prop to child component
    // can check if the new prop is different from the old prop
    componentWillReceiveProps() {
        // this is deprecated in react 16
        // along with the 2
        // componentWillMount()
        // componentWillUpdate()
    }

    shouldComponentUpdate(nextProps, nextState) {
        // making decision whether to change or not
        // return tru if we want to update
        // or we can return false, otherwise
    }

    componentWillUnmount() {
        // do some cleaup or tear down your code before your compoenent 
        // disappear (eg. remove event listener)
    }

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App