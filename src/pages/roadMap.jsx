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
                        <label htmlFor="stack">Stack</label>
                        <input
                            id="stack"
                            className="focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300"
                            type="text"
                            placeholder="Select you stack"
                            autoComplete="email"
                            // {...register("email")}
                        />
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
                <div>
                    
                </div>
                <h3>Switch to Book Categories</h3>
                <img src="../../Roadmap.png" alt="" />
            </section>
        </div>
    );
}
