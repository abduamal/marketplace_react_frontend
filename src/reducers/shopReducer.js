// takes the previous state as the first argument, an action object as the second
// then inside, the reducer is updated based on the action type
// shop reducer is a function in essence

export default function shopReducer(state = {shops: []}, action ) {
  switch (action.type) {
    case 'FETCH_SHOPS':
      return {shops: action.payload}
    case 'ADD_SHOP':
      return {...state, shops: [...state.shops, action.payload]}
    case 'ADD_PRODUCT':
      let shops = state.shops.map(shop => {
        if (shop.id === action.payload.id) {
          return action.payload
        } else {
          return shop
        }
      })
      return {...state, shops: shops}
    default:
      return state
  }
}
