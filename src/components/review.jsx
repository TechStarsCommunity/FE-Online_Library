import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ReviewCard from "./reviewCard";
import { myData } from "../data/reviewData";

const perPage = 2;

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const increaseIndex = () => {
        if (currentIndex + 2 < myData.length) {
            setCurrentIndex(currentIndex + 2);
        }
    };

    const decreaseIndex = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 2);
        }
    };

    return (
        <div className="w-full p-[40px] bg-[#F3FEFB] relative grid gap-[10px]">
            <h1 className="text-[24px] md:text-[30px] my-[20px] text-[#203A66] font-bold lg:text-[36px]">
                What our BooksLab readers have to say
            </h1>
            <div className="w-full grid md:grid-cols-2 gap-[25px] grid-cols-1 mb-[20px]">
                {myData.slice(currentIndex, currentIndex + 2).map((data, index) => (
                    <ReviewCard
                        key={index}
                        comment={data.comment}
                        userName={data.name}
                        stack={data.stack}
                    />
                ))}
            </div>
            <div className="flex items-center gap-[25px] absolute right-[20px] bottom-0 p-[10px]">
                <button
                    className={`bg-[#000] rounded-[50%] p-[5px] text-[#fff] ${
                        currentIndex === 0 ? "bg-[grey]" : ""
                    }`}
                    onClick={decreaseIndex}
                    disabled={currentIndex === 0}
                >
                    <AiOutlineLeft size={25} />
                </button>
                <button
                    className={`bg-[#000] rounded-[50%] p-[5px] text-[#fff] ${
                        currentIndex + 2 >= myData.length ? "bg-[grey]" : ""
                    }`}
                    onClick={increaseIndex}
                    disabled={currentIndex + 2 >= myData.length}
                >
                    <AiOutlineRight size={25} />
                </button>
            </div>
        </div>
    );
};

export default Review;
