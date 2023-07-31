import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import "./styles/index.css";
import { booksApi } from "./api/apiSlice.js";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ApiProvider api={booksApi}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </ApiProvider>
    </Provider>,
);
