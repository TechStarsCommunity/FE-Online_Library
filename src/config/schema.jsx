import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .email()
        .required("Your Email is Required, ensure it is the Correct Format"),
    password: yup.string().trim().min(8).required("Password Is A Required Field"),
});

export const SignUpSchema = yup.object().shape({
    name: yup.string().trim().required("Your Name Is Required"),
    username: yup.string().trim().required("Your Username Is Required"),
    email: yup
        .string()
        .trim()
        .email()
        .required("Your Email is Required, ensure it is the Correct Format"),
    password: yup.string().trim().min(8).required(),
    confirmPassword: yup
        .string()
        .trim()
        .oneOf([yup.ref("password"), undefined], "Passwords Don't Match")
        .required(),
});

export const ContactSchema = yup.object().shape({
    name: yup.string().trim().required("Your Name Is Required"),
    email: yup
        .string()
        .trim()
        .email()
        .required("Your Email is Required, ensure it is the Correct Format"),
    message: yup.string().trim().required("Your Message Is Required"),
});

export const EditProfileSchema = yup.object().shape ({
    name: yup.string().trim().required("Your name is required"),
    email:yup
    .string()
    .trim()
    .email()
    .required("Your Email is required, ensure it is the correct format"),
    message: yup.string().trim().required("Your message is required")
});
