// @ts-nocheck
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import "./styles/index.css";
import { booksApi } from "./api/apiSlice.js";


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
<<<<<<< HEAD
        <PersistGate persistor={persistor} loading={null}>
            <App />
            
        </PersistGate>
=======
        <ApiProvider api={booksApi}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </ApiProvider>
>>>>>>> eca8974b10ad7d771e35408dc729cc337f5e31f4
    </Provider>,
);
