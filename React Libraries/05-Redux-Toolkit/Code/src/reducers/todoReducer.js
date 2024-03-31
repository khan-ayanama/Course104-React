export const initialTodo = {
  numberOfTask: 2,
};

export function todoReducer(state = initialTodo, action) {
  switch (action.type) {
    case "todo/incremented":
      return { ...state, numberOfTask: state.numberOfTask + 1 };
    case "todo/decremented":
      return { ...state, numberOfTask: state.numberOfTask - 1 };
    default:
      return state;
  }
}
