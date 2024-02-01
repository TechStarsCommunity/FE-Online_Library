import { RouterProvider } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ToastContainer } from "react-toastify";
import { createIDBPersister } from "./persister";
import BrowserRouter from "./routes";

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
