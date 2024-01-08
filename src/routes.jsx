import React, { lazy } from "react";
import Loading from "./components/loading";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Uploads = lazy(() => import("./pages/uploads"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const Search = lazy(() => import("./pages/search"));
const OTPVerification = lazy(() => import("./pages/otpverification"));
const Profile = lazy(() => import("./pages/Profile"));
const PopularBooks = lazy(() => import("./pages/popularbooks"));
const Onboarding = lazy(() => import("./pages/onboarding"));
const EditProfile = lazy(() => import("./components/editProfile"));
const RoadMap = lazy(() => import("./pages/roadmap"));
const Error404 = lazy(() => import("./components/404"));

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
        path: "/profile/editProfile",
        element: (
            <React.Suspense fallback={<Loading />}>
                <EditProfile />
            </React.Suspense>
        ),
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
                <SignUp />
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
        path: "/road-map",
        element: (
            <React.Suspense fallback={<Loading />}>
                <RoadMap />
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
        path: "/profile",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Profile />
            </React.Suspense>
        ),
    },
    {
        path: "/onboarding",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Onboarding />
            </React.Suspense>
        ),
    },
    {
        path: "/popularbooks",
        element: (
            <React.Suspense fallback={<Loading />}>
                <PopularBooks />
            </React.Suspense>
        ),
    },
    {
        path: "*",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Error404 />
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;
