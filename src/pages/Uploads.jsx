import React from "react";
import "../styles/Uploads.css";
// import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import UploadContents from "../components/UploadContents";
import RightSidebar from "../components/RightSidebar";

const Uploads = () => {
    return (
        <React.Fragment>
            <div className="uploads">
                <LeftSidebar />
                <UploadContents />
                <RightSidebar />
            </div>
        </React.Fragment>
    );
};

export default Uploads;
