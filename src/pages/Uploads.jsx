import React from "react";
import "../styles/Uploads.css";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import UploadContents from "../components/UploadContents";

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
