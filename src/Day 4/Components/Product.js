import React from 'react'

function Product(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3 style={{display: !props.price && "none"}}>Price: {props.price.toLocaleString("en-US", {style:"currency", currency: "AUD"})}</h3>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Product