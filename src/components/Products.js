import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function Products(props) {
  return(
    <div>
      {props.products && props.products.map( product =>
        <CardGroup key={product.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Card.Text>
                ${product.price}/item
              </Card.Text>
              <Card.Text>
                {product.quantity} items available
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      )}
    </div>
  )
}

export default Products
