import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ReviewCard from "./reviewCard";

const Review = () => {
    const myData = [
        {
            name: "Amanda",
            stack: "Frontend",
            comment:
                "wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snl wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn",
        },
        {
            name: "Kelechi",
            stack: "Backend",
            comment:
                "wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snl wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn",
        },
        {
            name: "Product",
            stack: "Product",
            comment:
                "wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snl wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn",
        },
        {
            name: "Hakeem",
            stack: "Backend",
            comment:
                "wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snl wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn wjsglsgm anknk flg snlsgn",
        },
    ];
    const [activeData, setActiveData] = useState([myData[0], myData[1]]);
    const [currentIndex, setCurrentIndex] = useState(1);

    const increaseIndex = () => {
        if (currentIndex + 2 <= myData.length) {
            setCurrentIndex(currentIndex + 2);
        }
    };

    const decreaseIndex = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 2);
        }
    };

    useEffect(() => {
        setActiveData([myData[currentIndex - 1], myData[currentIndex]]);
    }, [currentIndex]);

    return (
        <div className="w-full p-[40px] bg-[#F3FEFB] relative grid gap-[10px]">
            <h1 className="text-[24px] md:text-[30px] my-[20px] text-[#203A66] font-bold lg:text-[36px]">
                What our BooksLab readers have to say
            </h1>
            <div className="w-full grid md:grid-cols-2 gap-[25px] grid-cols-1 mb-[20px]">
                {activeData.map((data, index) => (
                    <ReviewCard
                        key={index}
                        comment={data.comment}
                        userName={data.name}
                        stack={data.stack}
                    />
                ))}
            </div>
            <div className="flex items-center gap-[25px] absolute right-[20px] bottom-0 p-[10px]">
                <div className="bg-[#000] rounded-[50%] p-[5px] text-[#fff]">
                    <AiOutlineLeft size={25} onClick={increaseIndex} />
                </div>
                <div className="bg-[#000] rounded-[50%] p-[5px] text-[#fff]">
                    <AiOutlineRight size={25} onClick={decreaseIndex} />
                </div>
            </div>
        </div>
    );
};

export default Review;
