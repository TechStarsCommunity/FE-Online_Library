import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ReviewCard from "./reviewCard";
import { myData } from "../data/reviewData";

const perPage = 2;

const Review = () => {
    const [data, setData] = useState(myData);
    const [page, setPage] = useState(1);
    const skip = page * perPage - perPage;
    const isDisabled = page === Math.ceil(data.length / perPage);

    const handleNext = () => {
        if (!isDisabled) {
            setPage((page) => page + 1);
        }
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage((page) => page - 1);
        }
    };

    return (
        <div className="w-full p-[40px] bg-[#F3FEFB] relative grid gap-[10px]">
            <h1 className="text-[24px] md:text-[30px] my-[20px] text-[#203A66] font-bold lg:text-[36px]">
                What our BooksLab readers have to say
            </h1>
            <div className="w-full grid md:grid-cols-2 gap-[25px] grid-cols-1 mb-[20px]">
                {data.slice(skip, skip + perPage).map((data, index) => (
                    <ReviewCard
                        key={index}
                        comment={data.comment}
                        userName={data.name}
                        stack={data.stack}
                    />
                ))}
            </div>
            <div className="flex items-center gap-6 absolute right-[20px] bottom-0 p-[10px]">
                <button className={`${page === 1 ? "text-[#8F8F8F]" : "text-[#000"}`} onClick={handlePrev} disabled={page === 1}>
                    <AiOutlineLeft size={20} />
                </button>
                <button className={`${isDisabled ? "text-[#8F8F8F]" : "text-[#000"}`} onClick={handleNext}
                    disabled={isDisabled}
                >
                    <AiOutlineRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Review;
