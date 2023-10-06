import { IoMdCloudUpload } from "react-icons/io";
import React from "react";

// Define common styles in variables
const inputStyles =
    "px-4 py-2 max-h-1/2 h-auto w-auto grow border-[#35EAB9] border focus:border-[#35EAB9] mb-[-2rem]";
const buttonStyles =
    "bg-gradient-to-r from-[#10B2F3] to-[#35EAB9] text-white p-[10px] rounded-lg mt-8";

const UploadContents = () => {
    return (
        <div className="py-8">
            <h2 className="font-bold text-2xl py-4">Upload your book</h2>
            <form method="post" className="w-full max-w-[90%]">
                <FormField label="Name" placeholder="album" />
                <FormField label="Description" placeholder="a brief summary about this book" />
                <SelectField label="Category" />
                <SelectField label="Level" />
                <SelectField label="Status" />
                <AuthorField />
                <AuthorField isCredits />
                <div>
                    <IoMdCloudUpload className="text-[#10B2F3]" />
                </div>
            </form>
        </div>
    );
};

const FormField = ({ label, placeholder }) => (
    <div className="mb-4">
        <label htmlFor={label.toLowerCase()} className="text-base mb-0">
            {label}
        </label>
        <input
            type="text"
            id={label.toLowerCase()}
            placeholder={placeholder}
            className={inputStyles}
        />
    </div>
);

const SelectField = ({ label }) => (
    <div className="mb-4">
        <label htmlFor={label.toLowerCase()} className="text-base mb-0">
            {label}
        </label>
        <select
            id={label.toLowerCase()}
            name={label.toLowerCase()}
            className={inputStyles + " rounded-lg text-[grey]"}
        >
            <option value="" disabled>
                --select {label.toLowerCase()}
            </option>
            <option value="Education">Education</option>
            <option value="Tech">Tech</option>
            <option value="Comedy">Comedy</option>
        </select>
    </div>
);

const AuthorField = ({ isCredits }) => (
    <div>
        <label htmlFor={isCredits ? "credits" : "author"} className="text-base mb-[-2rem]">
            {isCredits ? "Credits" : "Author"}
        </label>
        <div className="flex gap-4 flex-row items-center h-auto">
            <input
                type="text"
                id={isCredits ? "credits" : "author"}
                name={isCredits ? "credits" : "author"}
                placeholder={isCredits ? "Author1" : "John Doe"}
                className={inputStyles + " w-auto mb-0"}
            />
            <div>
                <button className={buttonStyles}>
                    {isCredits ? "Add Author" : "Use profile name"}
                </button>
            </div>
        </div>
    </div>
);

export default UploadContents;
