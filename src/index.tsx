import React from "react";
import ReactDOM from "react-dom";
import { RouterConfig } from "./components/routers/RouterConfig";
import { Provider } from "react-redux";
import { store } from './app/store';
import "./library/i18n/configs";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterConfig />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
