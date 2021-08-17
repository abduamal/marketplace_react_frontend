import React from 'react'
import ProductsContainer from '../containers/ProductsContainer'
import '../index.css'
import Button from 'react-bootstrap/Button'

function Shop(props) {

  // props.shops is looking at all the shops via routerProps in ShopsContainer
  // then, it is using the id to find the specific shop

  const shop = props.shops[props.match.params.id - 1]
  console.log(props)

  return (
    <div>
      <br/>
      <h4 className='pageTitle'>
        {shop ? shop.name : null} - {shop? shop.industry : null}
      </h4>
      <br/>
      <Button href='/shops' variant="primary">Go Back</Button>
      <br/>
      <br/>
      <ProductsContainer shop={shop}/>
    </div>

  )
}

export default Shop
