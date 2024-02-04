/* eslint-disable unicorn/filename-case */
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import BrowserRouter from "./routes";
import { createIDBPersister } from "./persister";

const App = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                gcTime: 1000 * 60 * 60 * 24 * 7, // 7 days
            },
        },
    });

    const persister = createIDBPersister("reactQuery");

    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
            <RouterProvider router={BrowserRouter} />
            <ToastContainer theme="colored" />
        </PersistQueryClientProvider>
    );
};

export default App;
