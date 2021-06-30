import React from "react"
import style from "../index.css"

// A different syntax
// function Header() {
//     return (
//         // can only apply className to react element, not the react components
//         <header className = "navbar">
//             This is the header
//         </header>
//     )
// }

// A different syntax in ES6
const Header = () => <header className = "navbar">This is the header</header>

export default Header