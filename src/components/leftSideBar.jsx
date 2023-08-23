import React from "react";
import "../styles/leftSideBar.css";

const LeftSidebar = () => {
    return (
        <React.Fragment>
            <div className="left__sidebar">
                <h1 className="left__sidebar-logo">Logo</h1>

                <div className="left__sidebar-options">
                    <div className="left__sidebar-option">
                        <img src={"/image.png"} alt="image" className="left__sidebar-optionImg" />
                        Dashboard
                    </div>

                    <div className="left__sidebar-option">
                        <img src={"/image.png"} alt="image" className="left__sidebar-optionImg" />
                        Uploads
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LeftSidebar;
