import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Search from "./pages/Search";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Uploads = lazy(() => import("./pages/Uploads"));
const Contact = lazy(() => import("./pages/Contact"));

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
                    <Route
                        path="/uploads"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Uploads />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Contact />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Search />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Login />
                            </React.Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
