export function addShop(data) {

  return (dispatch) => {
    fetch('http://localhost:3000/apiv2/shops', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(shop => dispatch({
      type: 'ADD_SHOP',
      payload: shop
    }))
  }

}
