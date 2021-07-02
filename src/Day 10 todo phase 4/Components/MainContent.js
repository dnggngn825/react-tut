import React from 'react'
import ToDoItem from './toDoItem'
import todoData from './todoData'


function MainContent() {

    const todoList = todoData.map(item =>
        <ToDoItem key={item.id} info={item} />)

    return (
        <div className="todo-list">
            {todoList}
        </div>
    )
}


export default MainContent