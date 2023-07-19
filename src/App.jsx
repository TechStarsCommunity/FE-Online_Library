import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Uploads = lazy(() => import("./pages/Uploads"));
const Contact = lazy(() => import("./pages/Contact"));
const SearchResult = lazy(() => import('./pages/searchResult'));
const Onboarding = lazy(() => import("./pages/onboarding"));


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
                        path="*"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Login />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/searchResult"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <SearchResult />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/onboarding"
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Onboarding />
                            </React.Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
