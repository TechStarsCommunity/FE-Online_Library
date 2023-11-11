import React, { useState } from "react";
import { UploadBookSchema } from "../config/schema";
import Uploader from "./Uploader";
import SelectField from "./selectField";
import AuthorField from "./authorField";
import FormField from "./formField";

// const fileFormatSchema = Yup.object().shape({
//   file: Yup.mixed()
//     .test("fileFormat", "Invalid file format", (value) => {
//       if (!value) return true;
//       const acceptedFormats = [".jpg", ".png", ".pdf"];
//       const fileExtension = value.name.split(".").pop().toLowerCase();
//       return acceptedFormats.includes("." + fileExtension);
//     })
//     .required("File is required"),
// });

// --------Styles for input and button--------
export const inputStyles =
    "px-4 py-2 max-h-1/2 h-auto w-full md:w-auto grow border-[#35EAB9] border focus:border-[#35EAB9] mb-[-2rem]";
export const buttonStyles =
    "bg-gradient-to-r from-[#10B2F3] to-[#35EAB9] text-white p-[10px] rounded-lg mt-8";

//-------major functions-------
const UploadContents = () => {
    const [formData, setFormData] = useState({
        Name: "",
        Description: "",
        Category: "",
        Level: "",
        Status: "",
        Author: "",
        Credits: "",
    });

    const [validationErrors, setValidationErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await UploadBookSchema.validate(formData, { abortEarly: false });
            console.log("Form is valid. You can submit.");
            // Clear any previous validation errors
            setValidationErrors({});
        } catch (errors) {
            const errorsObject = {};

            errors.inner.forEach((error) => {
                errorsObject[error.path] = error.message;
            });

            setValidationErrors(errorsObject);
        }
    };

    return (
        <div className="p-8">
            <h2 className="font-bold text-2xl py-4">Upload your book</h2>
            <form method="post" className="w-full max-w-[90%]" onSubmit={handleSubmit}>
                {/* Name Field */}
                <FormField
                    label="Name"
                    placeholder="album"
                    value={formData.Name}
                    onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                    error={validationErrors.Name}
                />

                {/* Description Field */}
                <FormField
                    label="Description"
                    placeholder="a brief summary about this book"
                    value={formData.Description}
                    onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
                    error={validationErrors.Description} // Pass the validation error as a prop
                />
                <SelectField label="Category" 
                error={validationErrors.Category} 
                value={formData.Category}
                onChange={(e) => setFormData({ ...formData, Category: e.target.value })}
                />
                <SelectField label="Level" 
                error={validationErrors.Level}
                value={formData.Level}
                onChange={(e) => setFormData({ ...formData, Level: e.target.value })}
                 />
                <SelectField label="Status" 
                error={validationErrors.Status}
                value={formData.Status}
                onChange={(e) => setFormData({ ...formData, Status: e.target.value })}
                 />
                <AuthorField 
                error={validationErrors.Author}
                value={formData.Author}
                onChange={(e) => setFormData({ ...formData, Author: e.target.value })}
                 />
                <AuthorField isCredits />

                <div className="flex w-full gap-5 flex-row">
                    <Uploader bookCover accept=".jpg, .png" id="img" />
                    <Uploader accept=".pdf" id="pdf" />
                </div>

                <button type="submit" className={buttonStyles}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UploadContents;
