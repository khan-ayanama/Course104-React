import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1>Hello</h1>
    </Provider>
  );
}

export default App;
