import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Search from "./pages/Search";
import Loading from "./components/loading";
// import Home from "./pages/home";
// import About from "./pages/About";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Uploads = lazy(() => import("./pages/Uploads"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Login />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Signup />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/uploads"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Uploads />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Contact />
                            </React.Suspense>
                        }
                    />

                    <Route
                        path="/about"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <About />
                            </React.Suspense>
                        }
                    />

                    <Route
                        path="/search"
                        element={
                            <React.Suspense fallback={<Loading />}>
                                <Search />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <React.Suspense fallback={<Loading />}>
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
