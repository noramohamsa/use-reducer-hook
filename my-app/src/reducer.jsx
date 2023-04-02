
export const initialState = {
  firstCount: 0,
  secondCount: 2,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.payload }
    case "increment by 5":
      return { ...state, firstCount: state.firstCount + action.payload }
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.payload }

    case "increment2":
      return { ...state, secondCount: state.secondCount + action.payload }
    case "increment2 by 5":
      return { ...state, secondCount: state.secondCount + action.payload }
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.payload }
    case "reset":
      return initialState
    default:
      return state
  }

}
export default reducer;