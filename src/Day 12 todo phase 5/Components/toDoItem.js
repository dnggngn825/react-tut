import React from "react";
import style from "../index.css";


function toDoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.info.completed} 
                onChange={() => props.passFunction(props.info.id)}  // it will fire an event, so props.passFunction is not good enough
            />
            <p>{props.info.text}</p>
        </div>
    )
}

export default toDoItem;
