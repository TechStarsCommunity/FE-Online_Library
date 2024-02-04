import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { useState } from "react";

import Button from "../components/button";
import { TechCareer } from "../data/search";
import "../styles/searchCard.css";

const SearchCard = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 5;

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * perPage;
    const pageCount = Math.ceil(TechCareer.length / perPage);
    const currentPageData = TechCareer.slice(offset, offset + perPage);

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="search-container">
                    <input type="text" placeholder="Search for a book, category or author" />
                </div>
                <div className="btn-search">
                    <Button className="btn-search">search</Button>{" "}
                </div>
            </div>
            <div className="flex items-center justify-between resultFound">
                <h3>97 results found in 0.33 seconds</h3>
                <select name="Sort By" id="" placeholder="Sort By">
                    <option value="">Sort By</option>
                    <option value="Latest">Latest</option>
                    <option value="Old To New">Old To New</option>
                    <option value="Technicality">Technicality</option>
                </select>
            </div>

            {currentPageData &&
                currentPageData.map((techCareer) => {
                    return (
                        <div
                            key={techCareer.id}
                            className="flex items-center justify-between bg-card"
                        >
                            <img src="/techImage.svg" alt="" />

                            <div className="">
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

            <ReactPaginate
                previousLabel={<BsArrowLeftShort />}
                nextLabel={<BsArrowRightShort />}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={`flex justify-center items-center h-[3rem] mt-[4rem] gap-[1rem] mb-[7rem]`}
                previousClassName={`p-2 bg-[#6F6F6F]`}
                nextClassName={`p-2 bg-[#6F6F6F]`}
                pageClassName={`bg-[#fff] px-2`}
                activeClassName={"bg-[#616161]"}
            />
        </>
    );
};

export default SearchCard;
