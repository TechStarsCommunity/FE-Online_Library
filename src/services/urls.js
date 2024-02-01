const API_URL = import.meta.env.VITE_API_URL;

const URLS = {
    API_URL,
    LOGIN: `${API_URL}/login`,
    REGISTER: `${API_URL}/register/`,
    VERIFY_EMAIL: `${API_URL}/register/verify-email`,
    RESET_PASSWORD: `${API_URL}/reset-password`,
    REQUEST_OTP: `${API_URL}/request-otp`,
    TOKEN: `${API_URL}/token`,
    TOKEN_REFRESH: `${API_URL}/token-refresh`,
    TOKEN_BLACKLIST: `${API_URL}/token-blacklist`,
    TOKEN_CONFIRMATION: `${API_URL}/token-confirmation`,
};

export default URLS;
