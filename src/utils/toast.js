import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SuccessToast = (message) => {
    toast.success(message);
};

export const ErrorToast = (message) => {
    toast.error(message);
};

export const InfoToast = (message) => {
    toast.info(message);
};

export const WarningToast = (message) => {
    toast.warning(message);
};
