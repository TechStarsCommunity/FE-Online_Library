import React from "react";
import "../styles/uploads.css";
import LeftSidebar from "../components/leftSideBar";
import RightSidebar from "../components/rightSideBar";
import UploadContents from "../components/uploadContents";

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
