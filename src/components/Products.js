import React from 'react'


function Products(props) {
  return(
    <div>
      {props.products && props.products.map( product =>
        <li key={product.id}>
          {product.name}<br/>
          {product.description}<br/>
          ${product.price} per item.<br/>
          {product.quantity} units available. <br/><br/>
        </li>
      )}
    </div>
  )
}

export default Products
