import React from "react";
import Header from "../components/header";
import SearchCard from "../components/searchCard";
import SearchAside from "../components/searchAside";
import Footer from "../components/footer";

const Search = () => {
    return (
        <React.Fragment>
            <main className="w-full p-7">
                <Header />
                <section className="searchGrid w-full flex">
                    <div className="grid gap-5">
                        <div className="w-full  grid gap-3">
                            <SearchCard />
                            <SearchCard />
                            <SearchCard />
                            <SearchCard />
                            <SearchCard />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-wrap gap-2">
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                            <SearchAside />
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default Search;
