import React from "react";
import style from "../index.css";


function toDoItem(props) {
    const CompleteStyle = props.info.completed? 
                {textDecorationLine: 'line-through', 
                textDecorationStyle: 'solid',
                fontStyle: 'italic',
                fontWeight: '200',
                color: 'grey'} : {}
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.info.completed} 
                onChange={() => props.passFunction(props.info.id)}  // it will fire an event, so props.passFunction is not good enough
            />
            <p style={CompleteStyle}>{props.info.text}</p>
        </div>
    )
}

export default toDoItem;
