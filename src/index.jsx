import React from "react";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createIDBPersister } from "./persister";

const ParentComponent = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                gcTime: 1000 * 60 * 60 * 24 * 7, // 7 days
            },
        },
    });

    const persister = createIDBPersister("reactQuery");

    return (
        <React.StrictMode>
            <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
                {children}
            </PersistQueryClientProvider>
        </React.StrictMode>
    );
};

export default ParentComponent;
