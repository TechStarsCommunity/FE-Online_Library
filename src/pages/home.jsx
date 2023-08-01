import React from "react";
// import TopCategories from "../components/topCategories";
import "../styles/home.css";
import { BsSearch } from "react-icons/bs";
import Header from "../components/header";
import AboutComponent from "../components/about";
import Footer from "../components/footer";
import Button from "../components/button/button";

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
                            }}
                        >
                            <Button className="get-started-btn">Get Started</Button>
                            <Button className="login-btn">Login</Button>
                        </div>
                    </div>
                </section>
                {/* <TopCategories /> */}
            </main>
            <AboutComponent />
            <Footer />
        </React.Fragment>
    );
};

export default home;
