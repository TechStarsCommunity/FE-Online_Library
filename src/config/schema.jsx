import { object, string, ref } from "yup";

export const LoginSchema = object().shape({
    email: string()
        .trim()
        .email()
        .required("Your Email is Required, ensure it is the Correct Format"),
    password: string().trim().min(8).required("Password Is A Required Field"),
});

export const SignUpSchema = object().shape({
    name: string().trim().required("Your Name Is Required"),
    username: string().trim().required("Your Username Is Required"),
    email: string()
        .trim()
        .email()
        .required("Your Email is Required, ensure it is the Correct Format"),
    password: string().trim().min(8).required(),
    confirm_password: string()
        .trim()
        .oneOf([ref("password"), undefined], "Passwords Don't Match")
        .required(),
});

export const ContactSchema = object().shape({
    name: string().trim().required("Your Name Is Required"),
    email: string()
        .trim()
        .email()
        .required("Your Email is Required, ensure it is the Correct Format"),
    message: string().trim().required("Your Message Is Required"),
});

export const UploadBookSchema = object().shape({
    Name: string().required("Please provide a valid name."),
    Description: string().required(
        "Don't leave the book description empty. Share a brief summary.",
    ),
    Category: string().required("Please select a category for your book."),
    Level: string().required("Specify the content level for your book."),
    Status: string().required("Please indicate the book's status"),
    Author: string().required("Author is required"),
});

export const EditProfileSchema = object().shape({
    name: string().trim().required("Your name is required"),
    email: string()
        .trim()
        .email()
        .required("Your Email is required, ensure it is the correct format"),
    message: string().trim().required("Your message is required"),
});
