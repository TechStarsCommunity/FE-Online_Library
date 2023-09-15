import React, { useState } from "react";
import tech from "/tech.svg";
import Button from "./button";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { categories } from "../data/category";

const TopCategoryV2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentCategory = categories[currentIndex];

    const goToNext = () => {
        if (currentIndex < categories.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="h-[90vh] md:h-[100vh] w-full relative ">
            <img src={currentCategory.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full md:h-[100vh] h-[90vh] myBg p-[30px] text-white flex flex-col gap-[30px]">
                <h2 className="text-[35px] md:text-[50px] font-bold">Top Categories</h2>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[40px] items-center justify-center">
                    <div className="flex flex-col gap-[30px]">
                        <div className="grid gap-[30px]">
                            <h4 className="text-[25px] md:text-[35px]">{currentCategory.title}</h4>
                            <p className="text-[18px]">{currentCategory.description}</p>
                        </div>
                        <Button
                            children={"Learn More"}
                            variant="primary"
                            style={{ width: "250px" }}
                        />
                    </div>
                    <div className="hidden md:flex">
                        <img src={currentCategory.image} alt="" className="w-full max-h-[400px]" />
                    </div>
                </div>
                <div className="py-[20px] px-[40px] w-full flex items-center justify-between absolute bottom-[20px] left-0 ">
                    <BsArrowLeftCircleFill
                        size={30}
                        style={{ cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
                        onClick={goToPrevious}
                    />
                    <div className=" w-[50%] rounded-lg flex items-center">
                        {categories.map((_, index) => (
                            <div
                                key={index}
                                className={`flex-1 h-[7px] bg-[#fff] rounded-lg ${
                                    index < currentIndex + 1 ? "bg-[#35eab9]" : ""
                                }`}
                            ></div>
                        ))}
                    </div>

                    <BsArrowRightCircleFill
                        size={30}
                        style={{
                            cursor:
                                currentIndex === categories.length - 1 ? "not-allowed" : "pointer",
                        }}
                        onClick={goToNext}
                    />
                </div>
            </div>
        </div>
    );
};

export default TopCategoryV2;