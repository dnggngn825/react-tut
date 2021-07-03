import React from 'react'
import ToDoItem from './toDoItem'
import todoData from './todoData'


// function MainContent() {

//     const todoList = todoData.map(item =>
//         <ToDoItem key={item.id} info={item} />)
    
//     return (
//         <div className="todo-list">
//             {todoList}
//         </div>
//     )
// }


// Cach 1
// class MainContent extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todoList: todoData.map(item => <ToDoItem key={item.id} info={item} />)
//         }
//     }

//     render() {
//         return (
//             <div className="todo-list">
//                 {this.state.todoList}
//             </div>
//         )
//     }
// }

// Cach 2
class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            todoL: todoData
        }
        this.HandleChange = this.HandleChange.bind(this)
    }

    // function to handle change when being clicked
    HandleChange(id)
    {
        this.setState((prevState) => {
            // let target = id
            const newlist = prevState.todoL.map(item => item)
            newlist[id-1].completed = !newlist[id-1].completed
            return {todoL: newlist}
        })
    }

    render() {
        const todoList = this.state.todoL.map(item => <ToDoItem key={item.id} info={item} passFunction={this.HandleChange} />)
        return (
            <div className="todo-list">
                {todoList}
            </div>
        )
    }
}

export default MainContent