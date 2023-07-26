// @ts-nocheck
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
// import store from "./reduxNew/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import "./styles/index.css";
import { booksApi } from "./api/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ApiProvider api={booksApi}>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
            </Provider>
    </ApiProvider>
    
);
