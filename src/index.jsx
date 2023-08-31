import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { booksApi } from "./api/apiSlice.js";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import ErrorFallback from "./errorBoundary/errorFallback.jsx";

const ParentComponent = ({ children }) => {
    const queryClient = new QueryClient();
    return (
        <React.StrictMode>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {
                    // Reset state of app
                }}
            >
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <ApiProvider api={booksApi}>
                            <PersistGate persistor={persistor} loading={null}>
                                {children}
                            </PersistGate>
                        </ApiProvider>
                    </Provider>
                </QueryClientProvider>
            </ErrorBoundary>
        </React.StrictMode>
    );
};

export default ParentComponent;
