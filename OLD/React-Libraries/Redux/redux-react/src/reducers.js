function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case "increment":
      return { amount: state.amount + 50 };
    case "decrement":
      return { amount: state.amount - 50 };
    case "incrementByAmount":
      return { amount: state.amount + action.payload };
    case "decrementByAmount":
      return { amount: state.amount - action.payload };
    default:
      return state;
  }
}

export default reducer;
