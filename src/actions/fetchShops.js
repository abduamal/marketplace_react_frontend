// the fetchShops function creates and returns an actionObject
export function fetchShops(){
  // this is how thunk is utilized..allows for dispatch to be passed in here so it can dispatch the action to the reducer which will update the state
  return (dispatch) => {
    fetch('http://localhost:3000/apiv2/shops')
    .then(response => response.json())
    .then(shops => dispatch({
      type: 'FETCH_SHOPS',
      payload: shops
    }))
  }
}
// (1.) The fetch request returns a promise - that some data will be returned eventually
// (2.) Once that promise is resolved, the response from the request goes into the first then - and it is converted into json
// (3.) The json data (actionObject) is sent into the second then - and it is dispatched to the shopReducer
    // - shopReducer will then return a new state (for the redux store) with changes based on the actions set in shopReducer
// dispatch(actionObject)
