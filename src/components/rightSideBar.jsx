import React from "react";
import "../styles/rightSideBar.css";

const RightSidebar = () => {
    return (
        <React.Fragment>
            <div className="right__sidebar">
                <div className="right__sidebar-owner">
                    <h4>Oluwaben Akeem</h4>
                </div>
                <div className="right__sidebar-containers">
                    <h2>Recently Approved</h2>

                    <div className="container-details">
                        <img src={"../assets/image_icon.png"} alt="" />
                        <div className="container-details-detail">
                            <h4>Starting a successful Career in Tech</h4>
                            <span>Oluwaben Akeem</span>
                        </div>
                    </div>
                    <div className="container-details">
                        <img src={"../assets/image_icon.png"} alt="" />
                        <div className="container-details-detail">
                            <h4>Starting a successful Career in Tech</h4>
                            <span>Oluwaben Akeem</span>
                        </div>
                    </div>
                    <div className="container-details">
                        <img src={"../assets/image_icon.png"} alt="" />
                        <div className="container-details-detail">
                            <h4>Starting a successful Career in Tech</h4>
                            <span>Oluwaben Akeem</span>
                        </div>
                    </div>
                </div>
                <div className="right__sidebar-containers">
                    <div className="right__sidebar-containers">
                        <h2>Recently Rejected</h2>

                        <div className="container-details">
                            <img src={"../assets/image_icon.png"} alt="" />
                            <div className="container-details-detail">
                                <h4>Starting a successful Career in Tech</h4>
                                <span>Oluwaben Akeem</span>
                            </div>
                        </div>
                        <div className="container-details">
                            <img src={"../assets/image_icon.png"} alt="" />
                            <div className="container-details-detail">
                                <h4>Starting a successful Career in Tech</h4>
                                <span>Oluwaben Akeem</span>
                            </div>
                        </div>
                        <div className="container-details">
                            <img src={"../assets/image_icon.png"} alt="" />
                            <div className="container-details-detail">
                                <h4>Starting a successful Career in Tech</h4>
                                <span>Oluwaben Akeem</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RightSidebar;
