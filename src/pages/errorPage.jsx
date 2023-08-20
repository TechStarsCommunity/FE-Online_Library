import React from "react";
import "../styles/error.css";
import { BsSearch } from "react-icons/bs";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/button/button";
import { Link } from "react-router-dom";

const errorPage = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="w-full">
                <section className="error__section">
                    <div className="error__section-details">
                        <h1>PAGE NOT FOUND</h1>

                        <h3>Sorry, we couldn't find the page you are looking for</h3>
                        <div
                            className="btn-parent"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "40px",
                            }}
                        >
                            <Link to="/">
                                <Button variant="primary">Go Back Home</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </React.Fragment>
    );
};

export default errorPage;
