/* eslint-disable unicorn/filename-case */
import React from "react";
import "./styles/App.css";
import { RouterProvider } from "react-router-dom";
import BrowserRouter from "./routes";

function App() {
    return (
        <React.Fragment>
            <RouterProvider router={BrowserRouter} />
        </React.Fragment>
    );
}

export default App;
