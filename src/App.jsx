import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Login />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Signup />
                            </React.Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
