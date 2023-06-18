import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Signup = lazy(() => import("../src/pages/Signup"));
const Login = lazy(() => import("../src/pages/Login"));

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
