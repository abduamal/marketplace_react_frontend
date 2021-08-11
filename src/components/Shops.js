import React from 'react'
import {Route, Link} from 'react-router-dom'
import Shop from './Shop'


// to render the list of shops, this Shops function has access to the list of shops via ShopsContainer
// the list is being called through the props argument
function Shops(props) {
  console.log(props)
  return(
    <div>
      {props.shops.map(shop =>
        <div key={shop.id}>
          <Link to={`/shops/${shop.id}`}>{shop.name}</Link>
        </div>
      )}
    </div>
  )
}

export default Shops
