import React, { useRef, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import tech from "../assets/tech.png";
import fruit from "../assets/fruit.png";
import women from "../assets/women.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TopCategories = () => {
    const categories = [
        {
            image: tech,
            title: "Tech",
            description: "All distributions of tech books",
        },
        {
            image: fruit,
            title: "Nutrition",
            description: "Boost your Nutrition and Health with these books",
        },
        {
            image: women,
            title: "Sports",
            description: "For Athletes, get in the zone and aim for the summit.",
        },
        {
            image: tech,
            title: "Tech",
            description: "All distributions of tech books",
        },
    ];

    return (
        <div className="bg-[#35EAB9] w-full px-10 py-5 categriesHeader">
            <h2 className="">Top Categories</h2>
            <div className="w-full flex items-start pt-3 overflow-x-auto gap-8 custom-bar">
                {categories.map((category) => {
                    return (
                        <CategoriesCard
                            src={category.image}
                            title={category.title}
                            description={category.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TopCategories;