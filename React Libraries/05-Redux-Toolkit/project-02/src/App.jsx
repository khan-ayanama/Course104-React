import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function handleDispatch(e) {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "Increment":
        return dispatch({ type: "count/incremented" });
      case "Decrement":
        return dispatch({ type: "count/decremented" });
    }
  }

  return (
    <>
      <h1>Application</h1>
      <h3>Number of todos: {count}</h3>
      <button type="button" onClick={handleDispatch}>
        Increment
      </button>
      <button type="button" onClick={handleDispatch}>
        Decrement
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "count/decremented" })}
      >
        DecrementOnButton
      </button>
    </>
  );
};

export default App;
