// takes the previous state as the first argument, an action object as the second
// then inside, the reducer is updated based on the action type
// shop reducer is a fuction in essence

export default function shopReducer(state = {shops: []}, action ) {

  return action.payload

}