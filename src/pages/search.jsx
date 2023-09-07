import React from "react";
import Header from "../components/header";
import SearchCard from "../components/searchCard";
import SearchAside from "../components/searchAside";
import Footer from "../components/footer";

const Search = () => {
    return (
        <React.Fragment>
            <main className="w-full">
                <Header />
                <section className="flex bg-background">
                    <div className="grid gap-5 flex-2">
                        <div className="w-full  grid gap-3">
                            <SearchCard />
                            <SearchCard />
                            <SearchCard />
                            <SearchCard />
                            <SearchCard />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex-2">
                            <SearchAside />
                        </div>
                    </div>
                </section>
                <Footer style={{ background: "white"}}/>
            </main>
        </React.Fragment>
    );
};

export default Search;
