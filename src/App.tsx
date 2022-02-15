import { Provider } from "react-redux";
import React from "react";
import store from "./store";
import TemplateListing from "./screens/templateListing";

function App() {
    return (
        <Provider store={store}>
            <TemplateListing />
        </Provider>
    );
}

export default App;
