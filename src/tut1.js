import React from 'react';
import ReactDOM from 'react-dom';


/**
 * ReactDOM.render("what I want to return", "where I want to place it")
 * 
 * JSX: HTML version of JS, can only take 1 JSX. Can only return only JSX component
 * 
 * for function, return the JSX that you want in parethesis
 * in the reactDOM render, include <MyApp />
 */


// ReactDOM.render(
//   <h1>Hello Dang</h1>,
//   document.getElementById("root")
// )

// ReactDOM.render(
//   <div><h1>Hello Dang</h1><p>This is a paragraph</p></div>,
//   document.getElementById("root")
// )

function MyApp() {
  return (
    <ul>
      <li>Name</li>
      <li>Age</li>
      <li>Uni</li>
    </ul>
  )
}

ReactDOM.render(
  <MyApp />, document.getElementById("root")
)