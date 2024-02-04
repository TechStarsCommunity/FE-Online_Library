import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

import AboutComponent from "../components/about";
import ContactComponent from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Review from "../components/review";
import Roadmap from "../components/roadmap";
import TopCategory from "../components/topCategory";
import "../styles/home.css";

const Home = () => {
    return (
        <>
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
                            <Link
                                to="/signup"
                                style={{
                                    maxWidth: "150px",
                                    borderRadius: "25px",
                                    fontSize: "16px",
                                    height: "auto",
                                    padding: "0.5em",
                                }}
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/login"
                                style={{
                                    maxWidth: "150px",
                                    borderRadius: "25px",
                                    fontSize: "16px",
                                    height: "auto",
                                    padding: "0.5em",
                                }}
                            >
                                Login
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
        </>
    );
};

export default Home;
