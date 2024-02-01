import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../axios";
import URLS from "../urls";

export const useLoginMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.LOGIN, data);
            return response.data;
        },
        onSuccess: async (data) => {
            if (data) sessionStorage.setItem("bookslab-token", data?.access);
            return await queryClient.invalidateQueries("user");
        },
    });
};

export const useRegisterMutation = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.REGISTER, data);
            return response.data;
        },
    });

export const useVerifyEmailMutation = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.VERIFY_EMAIL, data);
            return response.data;
        },
    });

export const useResetPasswordMutation = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.RESET_PASSWORD, data);
            return response.data;
        },
    });

export const useRequestOtpMutation = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(URLS.REQUEST_OTP, data);
            return response.data;
        },
    });
