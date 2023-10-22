import React from "react";
import "../styles/home.css";
import { BsSearch } from "react-icons/bs";
import Header from "../components/header";
import Roadmap from "../components/roadmap";
import AboutComponent from "../components/about";
import Footer from "../components/footer";
import Button from "../components/button";
import ContactComponent from "../components/contact";
import TopCategory from "../components/topCategory";
import Review from "../components/review";
import { Link } from "react-router-dom";

const home = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="w-full">
                <section className="hero__section">
                    <div className="hero__section-details">
                        <h1>BooksLab</h1>
                        <div className="search-container">
                            <BsSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search for a book, category or author"
                            />
                            <button type="button" className="search-button">
                                Search
                            </button>
                        </div>
                        <h3>Your Virtual Gateway to Boundless Resources</h3>
                        <div
                            className="btn-parent"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "40px",
                                gap: "12px",
                            }}
                        >
                            <Link to="/signup">
                                <Button
                                    children={"Get Started"}
                                    variant="primary"
                                    style={{
                                        maxWidth: "150px",
                                        borderRadius: "25px",
                                        fontSize: "16px",
                                        height: "auto",
                                        padding: "0.5em",
                                    }}
                                />
                            </Link>
                            <Link to="/login">
                                <Button
                                    children={"Login"}
                                    variant="secondary"
                                    style={{
                                        maxWidth: "150px",
                                        borderRadius: "25px",
                                        fontSize: "16px",
                                        height: "auto",
                                        padding: "0.5em",
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </section>
                <TopCategory />
            </main>
            <Roadmap />
            <AboutComponent />
            <Review />
            <ContactComponent />
            <Footer />
        </React.Fragment>
    );
};

export default home;
