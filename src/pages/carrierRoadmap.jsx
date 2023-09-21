import React from "react";
import "../styles/frontendRoadmap.css";
import carrierImg1 from "../../public/carrierImg1.png";
import carrierImg2 from "../../public/carrierImg2.png";
import carrierImg3 from "../../public/carrierImg3.png";
import carrierImg4 from "../../public/carrierImg4.png";
import icon from "../../public/frontendicon.svg";
import arrow1 from "../../public/arrowRight.svg";
import arrow2 from "../../public/arrowCurve.svg";
import arrow3 from "../../public/arrowDown.svg";



export default function carrierRoadmap () {
    return (
        <div className="frontMap-container">
            <h1>Roadmap</h1>
            <h3>Frontend Roadmap</h3>

            <div className="frontImg-container">
                <div className="Roadmap-container">
                    <img src={carrierImg1} alt="Image" className="frontImg"/>

                    <p className="carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="text" placeholder="Oluwaben Akeem" className="name"/>

                    <img src={icon} alt="iconImg" className="icon">Frontend Development</img>
                </div>

                <img src={arrow1} alt="arrowImg" className="path1"/>

                <div className="Roadmap-container">
                    <img src={carrierImg2} alt="Image" className="frontImg"/>

                    <p className="carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="text" placeholder="Oluwaben Akeem" className="name"/>

                    <input type="text" placeholder="Frontend Development" className="name"/>
                </div>

                <img src={arrow1} alt="arrowImg" className="path1"/>

                <div className="Roadmap-container">
                    <img src={carrierImg3} alt="Image" className="frontImg"/>

                    <p className="carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="text" placeholder="Oluwaben Akeem" className="name"/>

                    <input type="text" placeholder="Frontend Development" className="name"/>
                </div>

                <img src={arrow1} alt="arrowImg" className="path1"/>

                <div className="Roadmap-container">
                    <img src={carrierImg4} alt="Image" className="frontImg"/>

                    <p className="carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="text" placeholder="Oluwaben Akeem" className="name"/>

                    <input type="text" placeholder="Frontend Development" className="name"/>
                </div>

                <img src={arrow2} alt="arrowImg" className="path2"/>

                <h2>Projects</h2>

                <div className="Roadmap-container">

                    <p className="carrier-text">Starting a Successful Carrier in Tech</p>

                    <input type="text" placeholder="Project" className="name"/>

                    <img src={icon} alt="iconImg" className="icon">Frontend Development</img>
                </div>

                <img src={arrow3} alt="arrowImg" className="path3"/>

            </div>
        </div>

    );
}