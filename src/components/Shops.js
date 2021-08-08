import React from 'react'


// to render the list of shops, this Shops function has access to the list of shops via ShopsContainer
// the list is being called through the props argument
function Shops(props) {
  return(
    <div>
      {props.shops.data.map((shop, index) =>
        <li key={`${index}`}>
          {shop.attributes.name} - {shop.attributes.industry}
        </li>
      )}
    </div>
      )
}
export default Shops
