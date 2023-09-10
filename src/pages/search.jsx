import React from "react";
import Header from "../components/header";
import SearchCard from "../components/searchCard";
import "../styles/searchCard.css";
import SearchAside from "../components/searchAside";
import Footer from "../components/footer";

const Search = () => {
    return (
        <React.Fragment>
            <main className="w-full">
                <Header />
                <section className="flex bg-background">
                    <div className="searchCardWidth">
                        <div className="w-full  grid gap-3">
                            <SearchCard />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex-2">
                            <SearchAside />
                        </div>
                    </div>
                </section>
            </main>
            <div className="footerColor">
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Search;
