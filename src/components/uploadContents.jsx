import React, { useState, useEffect } from "react";
import { MdCloudUpload } from "react-icons/md";
import Thumbnail from "react-thumbnail-generator";

// Define styles for input and button
const inputStyles =
    "px-4 py-2 max-h-1/2 h-auto w-full md:w-auto grow border-[#35EAB9] border focus:border-[#35EAB9] mb-[-2rem]";
const buttonStyles =
    "bg-gradient-to-r from-[#10B2F3] to-[#35EAB9] text-white p-[10px] rounded-lg mt-8";

//major function
const UploadContents = () => {
    return (
        <div className="p-8">
            <h2 className="font-bold text-2xl py-4">Upload your book</h2>
            <form method="post" className="w-full max-w-[90%]">
                <FormField label="Name" placeholder="album" />
                <FormField label="Description" placeholder="a brief summary about this book" />
                <SelectField label="Category" />
                <SelectField label="Level" />
                <SelectField label="Status" />
                <AuthorField />
                <AuthorField isCredits />
                <div className="flex w-full gap-5 flex-row">
                    <Uploader bookCover accept=".jpg, .png" id="img" />
                    <Uploader accept=".pdf" id="pdf" />
                </div>
            </form>
        </div>
    );
};
// components sections

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
            {isCredits ? "Credits" : "Authors name"}
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

function Uploader({ bookCover, accept, id }) {
    const [fileData, setFileData] = useState({ fileName: "", imageURL: null });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileData({
                fileName: file.name,
                imageURL: URL.createObjectURL(file),
            });
        }
    };
    useEffect(() => {
        return () => {
            if (fileData.fileURL) {
                URL.revokeObjectURL(fileData.fileURL);
            }
        };
    }, [fileData.imageURL]);

    return (
        <div className="w-full space-y-2">
            <p>{bookCover ? "Upload book cover" : "Upload book Manuscript"}</p>
            <div
                className="border rounded-lg border-[#10B2F3] flex flex-col cursor-pointer justify-center items-center w-full h-[200px]"
                onClick={() => document.getElementById(id).click()}
            >
                <input type="file" accept={accept} hidden id={id} onChange={handleFileChange} />
                {fileData.imageURL ? (
                    <div>
                        <img src={fileData.imageURL} width={100} alt={fileData.fileName} />
                        <p>{fileData.fileName}</p>
                    </div>
                ) : (
                    <>
                        <MdCloudUpload color="#10B2F3" size={60} />
                        <p className="font-bold">
                            {bookCover ? "Upload jpg or png" : "Upload pdf"}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default UploadContents;
