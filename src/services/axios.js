import Axios from "axios";
import URLS from "./urls";
import { ErrorToast } from "@/utils/toast";

const axios = Axios.create({
    baseURL: URLS.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const axiosConfigurator = (config) => {
    const token = sessionStorage.getItem("bookslab-token");
    if (token) {
        config.headers = {
            ...(config.headers ?? {}),
            Authorization: `Bearer ${token}`,
        };
    }
    return config;
};

axios.interceptors.request.use(axiosConfigurator);

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log("axios error", error);
        const errMsg =
            error?.response?.data?.detail || error?.response?.data?.error || error?.message;
        if (error.code === "ERR_NETWORK") {
            return Promise.reject(new Error("You are not connected to the internet."));
        }
        if (errMsg === "Authentication Failed") {
            sessionStorage.removeItem("bookslab-token");
            return;
        }
        if (errMsg) {
            ErrorToast(errMsg);
            return {};
        }
    },
);

export default axios;
