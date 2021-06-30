import React from 'react'
import productData from './vschoolProducts' // name of import stuff doesnt need to be the same as the one being exported
import Product from './Product'

function MainContent(){
    const productList = productData.map(product =>
        <Product 
            key={product.id} 
            name={product.name} 
            price={product.price}
            description={product.description}/>
    )

    return (
        <div>
            {productList}
        </div>
    )
}

export default MainContent