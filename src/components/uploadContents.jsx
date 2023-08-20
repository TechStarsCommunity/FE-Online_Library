import React from "react";
import "../styles/uploadContents.css";
import Navbar from "./navbar";

const UploadContents = () => {
    return (
        <React.Fragment>
            <div className="uploadContents">
                <Navbar />
                <div className="uploadContents__contents">
                    <h2 className="uploadContents__contents-text">Pending Approval</h2>
                    <div className="uploadContents__contents-content">
                        <img src={"/image_icon.png"} alt="uploads img" />
                        <div className="uploadContents__contents-content-details">
                            <h4>Starting a successful Career in Tech</h4>
                            <h6>
                                Uploaded by: <span>Oluwaben Akeem</span>
                            </h6>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "gray",
                                }}
                            >
                                <img
                                    src={"/image_icon.png"}
                                    alt=""
                                    style={{
                                        width: "45px",
                                        height: "30px",
                                        marginTop: "15px",
                                        borderRadius: "3px",
                                        paddingRight: "15px",
                                        objectFit: "cover",
                                    }}
                                />
                                <span style={{ marginTop: "15px" }}>Frontend Development</span>
                            </div>
                        </div>
                        <div className="uploadContents__contents-content-images">
                            <div className="uploadContents__contents-content-image">
                                <img src={"/image_icon.png"} alt="uploads img" />
                                accept
                            </div>
                            <div className="uploadContents__contents-content-image">
                                <img src={"/image_icon.png"} alt="uploads img" />
                                reject
                            </div>
                        </div>
                    </div>

                    <div className="uploadContents__contents-content">
                        <img src={"/image_icon.png"} alt="uploads img" />
                        <div className="uploadContents__contents-content-details">
                            <h4>Starting a successful Career in Tech</h4>
                            <h6>
                                Uploaded by: <span>Oluwaben Akeem</span>
                            </h6>
                        </div>
                        <div className="uploadContents__contents-content-images">
                            <div className="uploadContents__contents-content-image">
                                <img src={"/image_icon.png"} alt="uploads img" />
                                accept
                            </div>
                            <div className="uploadContents__contents-content-image">
                                <img src={"/image_icon.png"} alt="uploads img" />
                                reject
                            </div>
                        </div>
                    </div>

                    <div className="uploadContents__contents-content">
                        <img src={"/image_icon.png"} alt="uploads img" />
                        <div className="uploadContents__contents-content-details">
                            <h4>Starting a successful Career in Tech</h4>
                            <h6>
                                Uploaded by: <span>Oluwaben Akeem</span>
                            </h6>
                        </div>

                        <div className="uploadContents__contents-content-images">
                            <div className="uploadContents__contents-content-image">
                                <img src={"/image_icon.png"} alt="uploads img" />
                                accept
                            </div>
                            <div className="uploadContents__contents-content-image">
                                <img src={"/image_icon.png"} alt="uploads img" />
                                reject
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UploadContents;
