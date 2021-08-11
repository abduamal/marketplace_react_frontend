import React from 'react'
import { Redirect } from 'react-router-dom'

function Shop(props) {

  // props.shops is looking at all the shops via routerProps in ShopsContainer
  // then, it is using the id to find the specific shop
  let shop = props.shops[props.match.params.id - 1]
  console.log(shop);
  return (
    <li>
      {/* {shop ? null : <Redirect to='/shops'/>} */}
      {shop ? shop.name : null} - {shop? shop.industry : null}
    </li>
  )
}

export default Shop
