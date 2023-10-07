import React from "react";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";

// Define styles for input and button
const inputStyles =
    "px-4 py-2 max-h-1/2 h-auto w-full md:w-auto grow border-[#35EAB9] border focus:border-[#35EAB9] mb-[-2rem]";
const buttonStyles =
    "bg-gradient-to-r from-[#10B2F3] to-[#35EAB9] text-white p-[10px] rounded-lg mt-8";

//major function
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

function Uploader({ bookCover, accept, id }) {
    const [image, setImage] = useState(null); //no image initially
    const [fileName, setFileName] = useState();
    return (
        <div className="w-full">
            <p>{bookCover ? "Upload book cover" : "Upload book Manuscript"}</p>
            {/* when the div is clicked, you can also upload the image */}
            <div
                className="border rounded-lg border-[#10B2F3] flex flex-col cursor-pointer justify-center items-center w-full h-[200px]"
                onClick={() => document.getElementById(id).click()}
            >
                {/* it gets the file name we are uploading and displays it */}
                <input
                    type="file"
                    accept={accept}
                    hidden
                    id={id}
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name);
                        if (files) {
                            setImage(URL.createObjectURL(files[0]));
                        }
                    }}
                />
                {/* display image otherwise icon */}
                {image ? (
                    <img src={img} width={150} height={150} alt={fileName} />
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
