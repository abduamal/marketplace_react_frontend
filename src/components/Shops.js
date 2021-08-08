import React from 'react'


// to render the list of shops, this Shops function has access to the list of shops via ShopsContainer
// the list is being called through the props argument
function Shops(props) {
  console.log(props)
  return(
    <div>
      {props.shops.map(shop =>
        <li key={shop.id}>{shop.name} - {shop.industry}</li>
      )}
    </div>
  )
}

export default Shops
