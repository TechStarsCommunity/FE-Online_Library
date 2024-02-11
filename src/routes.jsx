import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Loading from "./components/loading";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Uploads = lazy(() => import("./pages/uploads"));
const YourLibrary = lazy(() => import("./components/yourLibrary"));
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
            <Suspense fallback={<Loading />}>
                <Home />
            </Suspense>
        ),
        errorElement: <div>Error 404</div>,
    },
    {
        path: "/profile/editProfile",
        element: (
            <Suspense fallback={<Loading />}>
                <EditProfile />
            </Suspense>
        ),
    },
    {
        path: "/login",
        element: (
            <Suspense fallback={<Loading />}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: "/signup",
        element: (
            <Suspense fallback={<Loading />}>
                <SignUp />
            </Suspense>
        ),
    },
    {
        path: "/uploads",
        element: (
            <Suspense fallback={<Loading />}>
                <Uploads />
            </Suspense>
        ),
    },
    {
        path: "/road-map",
        element: (
            <Suspense fallback={<Loading />}>
                <RoadMap />
            </Suspense>
        ),
    },
    {
        path: "/contact",
        element: (
            <Suspense fallback={<Loading />}>
                <Contact />
            </Suspense>
        ),
    },
    {
        path: "/about",
        element: (
            <Suspense fallback={<Loading />}>
                <About />
            </Suspense>
        ),
    },
    {
        path: "/search",
        element: (
            <Suspense fallback={<Loading />}>
                <Search />
            </Suspense>
        ),
    },
    {
        path: "/auth-otp",
        element: (
            <Suspense fallback={<Loading />}>
                <OTPVerification />
            </Suspense>
        ),
    },
    {
        path: "/profile",
        element: (
            <Suspense fallback={<Loading />}>
                <Profile />
            </Suspense>
        ),
    },
    {
        path: "/onboarding",
        element: (
            <Suspense fallback={<Loading />}>
                <Onboarding />
            </Suspense>
        ),
    },
    {
        path: "/popularbooks",
        element: (
            <Suspense fallback={<Loading />}>
                <PopularBooks />
            </Suspense>
        ),
    },
    {
        path: "*",
        element: (
            <Suspense fallback={<Loading />}>
                <Error404 />
            </Suspense>
        ),
    },
    {
        path: "/yourLibrary",
        element: (
            <Suspense fallback={<Loading />}>
                <YourLibrary />
            </Suspense>
        ),
    },
]);

export default BrowserRouter;
