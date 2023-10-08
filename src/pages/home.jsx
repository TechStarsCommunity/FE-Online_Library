import React from "react";
import "../styles/home.css";
import { BsSearch } from "react-icons/bs";

// change the name of the function to match the name of the file
import Header from "../components/header";
import Roadmap from "../components/roadmap";
import AboutComponent from "../components/about";
import Footer from "../components/footer";
import Button from "../components/button";
import ContactComponent from "../components/contact";
import TopCategoryV2 from "../components/topCategoryV2";
import Review from "../components/review";
import { Link } from "react-router-dom";

const home = () => {
    return (
        <React.Fragment>
            {/* Write Your Normal HTML Here */}
            <section className="hero__section" id="top">
                <div className="hero__section-details">
                    <h1>BooksLab</h1>
                    <div className="search-container">
                        <BsSearch className="search-icon" />
                        <input type="text" placeholder="Search for a book, category or author" />
                        <button type="button" className="search-button">
                            Search
                        </button>
                    </div>
                    <h3>Your Virtual Gateway to Boundless Resources</h3>
                </div>
            </section>
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
                            }}
                        >
                            <Link to="/signup">
                                <Button variant="primary">Get Started</Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="secondary">Login</Button>
                            </Link>
                        </div>
                    </div>
                </section>
                <TopCategoryV2 />
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
