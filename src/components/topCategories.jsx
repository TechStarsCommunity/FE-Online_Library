import React, { useRef, useState } from "react";
import CategoriesCard from "./categoriesCard";
import tech from "../assets/tech.png";
import fruit from "../assets/fruit.png";
import women from "../assets/women.png";
import "../styles/categories.css";

<<<<<<< HEAD

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
=======
>>>>>>> 739ebb5a3edbb56ce845538743174f123a55276f
const TopCategories = () => {

    return (
        <div className="bg-[#E9FCF4] w-full px-10 py-5 categriesHeader">
            <h2 className="">Top Categories</h2>
            <div className="w-full flex items-start pt-3 overflow-x-auto gap-8 custom-bar">
                {categories.map((category, key) => {
                    return (
                        <CategoriesCard
                            key={key}
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
