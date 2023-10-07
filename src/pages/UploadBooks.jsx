import React from "react";
import LeftSidebar from "../components/leftSideBar";

// change the name of the function to match the name of the file
const UploadBooks = () => {
    return (
        <React.Fragment>
           <div className="">
           <LeftSidebar />
           <h1>Upload your book</h1>
           <p>Name</p>
           </div>
        </React.Fragment>
    );
};

// Also change the name of the function here
export default UploadBooks;
