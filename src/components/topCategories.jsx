import React, { useEffect, useRef, useState } from "react";
import CategoriesCard from "./categoriesCard";
import "../styles/categories.css";
import { categories } from "../data/category";

const TopCategories = () => {
    const parentRef = useRef(null);

    useEffect(() => {
        const scrollContainer = parentRef.current;
        let scrollAmount = 0;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        const scroll = () => {
            scrollAmount++;
            if (scrollAmount > maxScroll) {
                scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
        };

        const scrollInterval = setInterval(scroll, 20);

        return () => clearInterval(scrollInterval);
    }, []);
    return (
        <div className="bg-[#E9FCF4] w-full px-10 py-5 categriesHeader">
            <h2 className="">Top Categories</h2>
            <div
                className="w-full flex items-start pt-3 overflow-x-auto gap-8 custom-bar"
                ref={parentRef}
            >
                {categories.ma((category, key) => {
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
