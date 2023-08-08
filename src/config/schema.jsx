import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email().required("Your Email is Required, ensure it is the Correct Format"),
    password: yup.string().min(8).required("Password Is A Required Field"),
});

export const signUpSchema = yup.object().shape({
    name: yup.string().required("Your Name Is Required"),
    username: yup.string().required("Your Username Is Required"),
    email: yup.string().email().required("Your Email is Required, ensure it is the Correct Format"),
    password: yup.string().min(8).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), undefined], "Passwords Don't Match")
        .required(),
});
