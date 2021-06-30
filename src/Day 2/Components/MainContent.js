import React from 'react'
import ToDoItem from './toDoItem'

function MainContent() {
    return (
        <div className="todo-list">
            <ToDoItem 
                info = {{name:"study",time:"12pm",date:"today"}}
            />
            <ToDoItem 
                info = {{name:"eat",time:"11pm",date:"today"}}
            />
            <ToDoItem 
                info = {{name:"badminton",time:"5pm",date:"today"}}
            />
        </div>
    )
}


export default MainContent