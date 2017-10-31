export default (state = 0, action) => {


  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'PLUS FIVE':
      return state + 5
    case 'MINUS FIVE':
      return state - 5
    case 'ZERO':
      return state - state
    default:
      return state
  }
}
