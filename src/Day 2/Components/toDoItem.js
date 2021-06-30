import React from "react";
import style from "../index.css";

function ToDoItem(props) {
    console.log(props)
    return (
        <div className="todo-item" >
            <input type="checkbox" checked={props.info.completed}/>
            {/* <label for="option1"> I have a bike</label> */}
            <div className= "todo-info-div" >
                <p>Task: {props.info.text}</p>
                {/* <p>Not Completed</p> */}
            </div>
        </div>
    );
}

export default ToDoItem;
