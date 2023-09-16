import React from "react";
import "../styles/searchCard.css";
import Button from "../components/button";
import TechCareer from "../techCareer.json";
const SearchCard = () => {
    return (
        <React.Fragment>
            <div className="flex items-center justify-between">
                <div className="search-container">
                    <input type="text" placeholder="Search for a book, category or author" />
                </div>
                <div className="btn-search">
                    <Button className="btn-search">search</Button>{" "}
                </div>
                <div className="flex items-center justify-between w-full">
                    <h3>97 results found in 0.33 seconds</h3>
                    <select name="Sort By" id="" placeholder="Sort By">
                        <option value="">Sort By</option>
                        <option value="Latest">Latest</option>
                        <option value="Old To New">Old To New</option>
                        <option value="Techniclity">Techniclity</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center justify-between resultFound">
                <h3>97 results found in 0.33 seconds</h3>
                <select name="Sort By" id="" placeholder="Sort By">
                    <option value="">Sort By</option>
                    <option value="Latest">Latest</option>
                    <option value="Old To New">Old To New</option>
                    <option value="Techniclity">Techniclity</option>
                </select>
            </div>

            {TechCareer &&
                TechCareer.map((techCareer) => {
                    return (
                        <div className="flex items-center justify-between bg-card">
                            <img src="/techImage.svg" alt="" />

                            <div className="" key={techCareer.id}>
                                <div className="flex">
                                    <strong>{techCareer.title}</strong>
                                    <br />
                                </div>
                                <div className="text-gray-700 text-opacity-100 text-xs">
                                    {techCareer.name}
                                </div>
                                <br />
                                <div className="flex text-gray-700 text-opacity-100 text-xs">
                                    <img src="/bookImage.svg" alt="" className="pr-5 w-10 " />
                                    {techCareer.tech}
                                    <br />
                                </div>
                            </div>
                            <div>
                                <p className="pb-10 text-gray-700 text-opacity-100 text-xs">
                                    42, 467 Downloads
                                </p>
                                <p className="text-gray-700 text-opacity-100 text-xs">
                                    92 Pages | 525 KB
                                </p>
                            </div>
                        </div>
                    );
                })}
        </React.Fragment>
    );
};

export default SearchCard;
