import Header from "../components/header";
import SearchCard from "../components/searchCard";
import SearchAside from "../components/searchAside";
import Footer from "../components/footer";
import "../styles/searchCard.css";

const Search = () => {
    return (
        <>
            <main className="w-full">
                <Header />
                <section className="flex bg-background">
                    <div className="searchCardWidth">
                        <div className="w-full grid gap-3">
                            <SearchCard />
                        </div>
                    </div>
                    <div className="flex-2">
                        <SearchAside />
                    </div>
                </section>
            </main>
            <div className="footerColor">
                <Footer />
            </div>
        </>
    );
};

export default Search;
