const intialState = {
  count: 3,
};

const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case "count/incremented":
      return { ...state, count: state.count + 1 };
    case "count/decremented":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
