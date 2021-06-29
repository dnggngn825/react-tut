import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>Dang Nguyen</h1>
      <p>Hello World</p>
      <ul>
        <li>Melbourne</li>
        <li>HCMC</li>
        <li>Sydney</li>
      </ul>
    </div>
  )
}


ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)