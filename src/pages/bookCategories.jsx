import React from "react";
import Button from "../components/button";
import CategoriesButton from "../components/categoriesButton";
import { categoryNames } from "../data/categoryNames";

const BookCategories = ({ show, setShow }) => {
    const handleClick = () => {
        setShow(false);
    };
    return (
        <React.Fragment>
            <body className="p-16">
                <header>
                    <div>
                        <h1 className="font-semibold text-4xl">Book Categories</h1>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-[#5B5B5B]">Select your favorite Categories</p>
                        <button onClick={() => handleClick()} className="text-[#5B5B5B]">
                            Switch to RoadMap
                        </button>
                    </div>
                </header>
                <main>
                    <div className="my-12 flex flex-wrap gap-6">
                        {categoryNames.map((category, index) => (
                            <CategoriesButton key={index} initialText={category} />
                        ))}
                    </div>
                </main>
                <footer className="flex justify-between">
                    <div className="w-2/5">
                        <Button borderVariant="noRadius" variant="primary">
                            Continue
                        </Button>{" "}
                    </div>
                    <button onClick={() => handleClick()} className="text-[#5B5B5B]">
                        Skip
                    </button>
                </footer>
            </body>
        </React.Fragment>
    );
};

export default BookCategories;
