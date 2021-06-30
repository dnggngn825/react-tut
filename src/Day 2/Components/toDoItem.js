import React from "react";
import style from "../index.css";

function ToDoItem(props) {
    console.log(props)
    return (
        <div className="todo-item">
            <input type="checkbox" />
            {/* <label for="option1"> I have a bike</label> */}
            <div className= "todo-info-div">
                <p>Action: {props.info.name}</p>
                <p>Time: {props.info.time}</p>
                <p>Date: {props.info.date} </p>
            </div>
        </div>
    );
}

export default ToDoItem;
