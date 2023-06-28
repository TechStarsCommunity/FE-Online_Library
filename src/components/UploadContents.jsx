import "../styles/UploadContents.css";
import Navbar from "./navbar";

import Image from "../assets/image_icon.png";
const UploadContents = () => {
    return (
        <div className="uploadContents">
            <Navbar />
            <div className="uploadContents__contents">
                <div className="uploadContents__contents-content">
                    <img src={Image} alt="uploads img" />
                    <div className="uploadContents__contents-content-details">
                        <h4>Starting a successful Career in Tech</h4>
                        <h6>
                            Uploaded by: <span>Oluwaben Akeem</span>
                        </h6>
                    </div>
                    <div className="uploadContents__contents-content-images">
                        <div className="uploadContents__contents-content-image">
                            <img src={Image} alt="uploads img" />
                            accept
                        </div>
                        <div className="uploadContents__contents-content-image">
                            <img src={Image} alt="uploads img" />
                            reject
                        </div>
                    </div>
                </div>

                <div className="uploadContents__contents-content">
                    <img src={Image} alt="uploads img" />
                    <div className="uploadContents__contents-content-details">
                        <h4>Starting a successful Career in Tech</h4>
                        <h6>
                            Uploaded by: <span>Oluwaben Akeem</span>
                        </h6>
                    </div>
                    <div className="uploadContents__contents-content-images">
                        <div className="uploadContents__contents-content-image">
                            <img src={Image} alt="uploads img" />
                            accept
                        </div>
                        <div className="uploadContents__contents-content-image">
                            <img src={Image} alt="uploads img" />
                            reject
                        </div>
                    </div>
                </div>

                <div className="uploadContents__contents-content">
                    <img src={Image} alt="uploads img" />
                    <div className="uploadContents__contents-content-details">
                        <h4>Starting a successful Career in Tech</h4>
                        <h6>
                            Uploaded by: <span>Oluwaben Akeem</span>
                        </h6>
                    </div>

                    <div className="uploadContents__contents-content-images">
                        <div className="uploadContents__contents-content-image">
                            <img src={Image} alt="uploads img" />
                            accept
                        </div>
                        <div className="uploadContents__contents-content-image">
                            <img src={Image} alt="uploads img" />
                            reject
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadContents;
