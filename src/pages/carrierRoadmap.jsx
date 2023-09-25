import React from "react";
import "../styles/carrierroadmap.css";
import carrierImg1 from "../../public/carrierImg1.png";
import carrierImg2 from "../../public/carrierImg2.png";
import carrierImg3 from "../../public/carrierImg3.png";
import carrierImg4 from "../../public/carrierImg4.png";
import icon from "../../public/frontendicon.svg";
import arrow1 from "../../public/arrowRight.svg";
import arrow2 from "../../public/arrowCurve.svg";
import arrow3 from "../../public/arrowDown.svg";

const Carrierroadmap = () => {
    return (
        <div className="FrontMap-container">
            <h1>Roadmap</h1>
            <h3>Frontend Roadmap</h3>

            <div className="FrontImg-container">
                <div className="Roadmap-container">
                    <img src={carrierImg1} alt="Image" className="FrontImg" />

                    <p className="Carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="Text" placeholder="Oluwaben Akeem" className="Name" />

                    <img src={icon} alt="Iconimg" className="Icon"/>
                    <p className="Frontend-text">Frontend Development</p>
                    </div>

                    <img src={arrow1} alt="ArrowImg" className="Path1" />

                <div className="Roadmap-container">
                    <img src={carrierImg2} alt="Image" className="FrontImg" />

                    <p className="Carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="Text" placeholder="Oluwaben Akeem" className="Name" />

                    <img src={icon} alt="Iconimg" className="Icon"/>
                    <p className="Frontend-text">Frontend Development</p>
                </div>

                <img src={arrow1} alt="ArrowImg" className="Path1" />

                <div className="Roadmap-container">
                    <img src={carrierImg3} alt="Image" className="FrontImg" />

                    <p className="Carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="Text" placeholder="Oluwaben Akeem" className="Name" />

                    <input type="Text" placeholder="Frontend Development" className="Name" />
                </div>

                <img src={arrow1} alt="ArrowImg" className="Path1" />

                <div className="Roadmap-container">
                    <img src={carrierImg4} alt="Image" className="FrontImg" />

                    <p className="carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="Text" placeholder="Oluwaben Akeem" className="Name" />

                    <img src={icon} alt="Iconimg" className="Icon"/>
                    <p className="Frontend-text">Frontend Development</p>

                </div>

                <img src={arrow2} alt="ArrowImg" className="Path2" />

                <h2>Projects</h2>

                <div className="Roadmap-container">
                    <p className="Carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="Text" placeholder="Project" className="Name" />

                    <img src={icon} alt="Iconimg" className="Icon"/>
                    <p className="Frontend-text">HTML Test</p>

                </div>

                <img src={arrow3} alt="ArrowImg" className="Path3" />
            </div>
        </div>
    );
};
export default Carrierroadmap;
