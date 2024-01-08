const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-8 w-full">
            <h1 className="text-3xl font-bold my-8 text-black text-center">404 Page Not Found</h1>
            <button
                className="px-4 py-2 text-white bg-[#45A2E5] rounded hover:bg-[#35EAB9] focus:outline-none focus:ring-2 focus:ring-[#35EAB9]"
                onClick={() => window.location.replace("/")}
            >
                Go Back Home
            </button>
        </div>
    );
};

export default Error404;
