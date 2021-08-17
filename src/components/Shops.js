import React from 'react'
import Button from 'react-bootstrap/Button'


// to render the list of shops, this Shops function has access to the list of shops via ShopsContainer
// the list is being called through the props argument
function Shops(props) {
  return(
    <div className="d-grid gap-2">
      {props.shops.map(shop =>
        <Button href={`/shops/${shop.id}`} key={shop.id} variant="outline-primary" size="lg">
          {shop.name}
        </Button>
      )}
    </div>
  )
}

export default Shops
