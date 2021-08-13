export function addProduct(product, shopId) {

  return(dispatch) => {
    fetch(`http://localhost:3000/apiv2/shops/${shopId}/products`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(shop => dispatch({
      type: 'ADD_PRODUCT',
      payload: shop
    }))
  }
}
