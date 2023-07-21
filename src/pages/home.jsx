import React from "react";
import "../styles/home.css";
import { BsSearch } from "react-icons/bs";

// change the name of the function to match the name of the file
const home = () => {
    return (
        <React.Fragment>
            <section className="hero__section">
                <div className="hero__section-details">
                    <h1>BooksLab</h1>
                    <div className="search-container">
                        <BsSearch className="search-icon"/>
                        <input type="text" placeholder="Search for a book, category or author" />
                        <button type="button" className="search-button">
                            Search
                        </button>
                    </div>
                    <h3>Your Virtual Gateway to Boundless Resources</h3>
                </div>
            </section>
        </React.Fragment>
    );
};

// Also change the name of the function here
export default home;
