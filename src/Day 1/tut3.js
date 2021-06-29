import React from "react"
import ReactDOM from "react-dom"

import MyInfo from "../Components/MyInfo" // -> need to have ./ as the current folder, refer to a path, default is .js


ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)