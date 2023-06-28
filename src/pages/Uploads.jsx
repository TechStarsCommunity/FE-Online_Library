import React from "react";
import "../styles/Uploads.css";
import LeftSidebar from "../components/LeftSidebar";
import UploadContents from "../components/uploadContents";
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
