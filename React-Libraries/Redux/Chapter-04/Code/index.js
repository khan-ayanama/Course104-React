import React from "react";
import ReactDOM  from "react-dom/client";
import { Provider } from "react-redux";

import ComponentOne from "./src/components/ComponentOne";
import ComponentTwo from "./src/components/ComponentTwo";
import store from "./src/store";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <ComponentOne/>
                <ComponentTwo/>
            </Provider>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)