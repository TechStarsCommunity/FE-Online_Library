
import React from "react";
// import './App.css';
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import Template from "./pages/Template";
function App() {
  return (
    <React.Fragment>
      <div>
        <Login />
      </div>
      <div>
        <Signup />

        <Template />
      </div>
    </React.Fragment>
  );
}

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