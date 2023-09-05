import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import React from "react";
import ParentComponent from "./index";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ParentComponent>
        <App />
    </ParentComponent>,
);