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
            todoL: [] 
        }
    }

    render() {
        const todoList = todoData.map(item => <ToDoItem key={item.id} info={item} />)
        this.state.todoL = todoList
        return (
            <div className="todo-list">
                {this.state.todoL}
            </div>
        )
    }
}

export default MainContent