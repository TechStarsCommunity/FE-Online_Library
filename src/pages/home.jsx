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
                            <Link to="/signup">
                                <button className="get-started-btn hidden md:block py-1.5 px-2.5 rounded-[3.125rem] text-white cursor-pointer w-[4.25rem] md:w-[6.25rem] md:h-full  border-none ease-in duration-300 hover:scale-[1.1]">
                                    Get Started
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className=" border-[#10b2f3] border-solid border py-1.5 px-2.5 rounded-[3.125rem]  outline-none cursor-pointer w-[4.25rem] md:w-[6.25rem] md:h-full  text-[#10b2f3] bg-white ease-in duration-300 hover:scale-[1.1]">
                                    Login
                                </button>
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
