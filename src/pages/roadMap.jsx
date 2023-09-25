import React from "react";
import "../styles/roadmap.css";
import Input from "../components/input";
import Button from "../components/button";

export default function RoadMap() {
    return (
        <div className="roadmap-container">
            <section className="formContainer">
                <div className="container-detail">
                    <h1>Road Map</h1>
                    <p>Select your favorite Categories</p>
                </div>
                <form>
                    <div>
                        <label for="role">Select your role:</label>
                        <select id="role" name="role">
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="fullstack">Fullstack</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="level">Level</label>
                        <input
                            id="level"
                            className="focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300"
                            type="text"
                            placeholder="Select you stack"
                            autoComplete="email"
                            // {...register("email")}
                        />
                    </div>
                </form>
                <div className="btn-container">
                    <Button className="btn-skip">Skip</Button>
                    <Button variant="primary">Continue</Button>
                </div>
            </section>

            <section className="svgContainer">
                <div>svg</div>
            </section>
        </div>
    );
}
