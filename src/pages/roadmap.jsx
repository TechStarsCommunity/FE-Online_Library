import React from "react";
import "../styles/roadmap.css";
import Button from "../components/button";

export default function RoadMap({ show, setShow }) {
    const handleClick = () => {
        setShow(true);
    };
    return (
        <div className="roadmap-container">
            <section className="formContainer">
                <div className="container-detail">
                    <h1>Road Map</h1>
                    <p>Select your favorite Categories</p>
                </div>
                <form>
                    <div>
                        <label htmlFor="stack">Stack</label>
                        <select id="stack" name="stack">
                            <option value="" disabled selected>
                                Select your stack
                            </option>
                            <option value="beginner">Frontend</option>
                            <option value="intermediate">Backend</option>
                            <option value="advanced">Fullstack</option>
                            <option value="advanced">dev Ops</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="level">Level</label>
                        <select id="level" name="level" style={{ marginBottom: "2rem" }}>
                            <option value="" disabled selected>
                                Select your level
                            </option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                </form>
                <div className="btn-container">
                    <Button className="btn-skip">Skip</Button>
                    <Button variant="primary">Continue</Button>
                </div>
            </section>

            <section className="svgContainer">
                <button onClick={() => handleClick()} className="text-[#5B5B5B]">
                    Switch to Book Categories
                </button>

                <img src="/Roadmap.png" alt="" />
            </section>
        </div>
    );
}
