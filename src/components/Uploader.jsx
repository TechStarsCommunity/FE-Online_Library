import React, { useState, useEffect } from "react";

import { MdCloudUpload } from "react-icons/md";

function Uploader({ bookCover, accept, id, error }) {
    const [fileData, setFileData] = useState({ fileName: "", imageURL: null });
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        if (accept && !accept.split(',').includes(file.type)) {
          // File format is not allowed, handle the error
          error("Invalid file format. Please upload " + accept);
        } else {
          setFileData({
            fileName: file.name,
            imageURL: URL.createObjectURL(file),
          });
          // Clear any previous error message
          error(null);
        }
      }
    };
  
    useEffect(() => {
      return () => {
        if (fileData.imageURL) {
          URL.revokeObjectURL(fileData.imageURL);
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
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
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

  export default Uploader