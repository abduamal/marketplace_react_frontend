import React from 'react'


function Shop(props) {
  console.log(props);
  let shop = props.shops[props.match.params.id - 1]
  console.log(shop);
  return (
    <li>
      {shop ? shop.name : null} - {shop? shop.industry : null}
    </li>
  )
}

export default Shop
