import React, { lazy } from "react";
import Loading from "./components/loading";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Uploads = lazy(() => import("./pages/uploads"));
const Contact = lazy(() => import("./pages/contact"));
const Profile = lazy(() => import("./pages/profile"));
const About = lazy(() => import("./pages/about"));
const Search = lazy(() => import("./pages/search"));
const BookCategories = lazy(() => import("./pages/bookCategories"));
const OTPVerification = lazy(() => import("./pages/otpverification"));
const carrierRoadmap = lazy(() => import("./pages/carrierRoadmap"));

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Home />
            </React.Suspense>
        ),
        errorElement: <div>Error 404</div>,
    },
    {
        path: "/login",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Login />
            </React.Suspense>
        ),
    },
    {
        path: "/signup",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Signup />
            </React.Suspense>
        ),
    },
    {
        path: "/uploads",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Uploads />
            </React.Suspense>
        ),
    },
    {
        path: "/contact",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Contact />
            </React.Suspense>
        ),
    },
    {
        path: "/profile",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Profile />
            </React.Suspense>
        ),
    },
    {
        path: "/about",
        element: (
            <React.Suspense fallback={<Loading />}>
                <About />
            </React.Suspense>
        ),
    },
    {
        path: "/search",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Search />
            </React.Suspense>
        ),
    },
    {
        path: "/auth-otp",
        element: (
            <React.Suspense fallback={<Loading />}>
                <OTPVerification />
            </React.Suspense>
        ),
    },
    {
        path: "*",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Login />
            </React.Suspense>
        ),
    },
    {
        path: "/bookcategories",
        element: (
            <React.Suspense fallback={<Loading />}>
                <BookCategories />
            </React.Suspense>
        ),
    },
    {
        path: "/carrierRoadmap",
        element: (
            <React.Suspense fallback={<Loading />}>
                <frontendRoadmap />
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;
