import React from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";
import CategoriesButton from "../components/categoriesButton";

const categoryNames = [
    "Editor's Pick",
    "Frontend Development",
    "Product Design",
    "Academic & Education",
    "Biography",
    "Children & Youth",
    "Fiction & Literature",
    "Religion",
    "Lifestyle",
    "Politics & Laws",
    "Science & Research",
    "Economics",
    "Food",
    "Marketing",
    "Parenting",
    "Relationships",
    "Backend Development",
    "Project Management",
    "Arts & Design",
    "Business & Career",
    "Environment",
    "Health & Fitness",
    "Personal Growth",
    "Tech",
    "Entertainment",
    "History",
    "Motivation",
    "Psychology",
    "Sports",
];

const BookCategories = () => {
    return (
        <React.Fragment>
            <body className="p-16">
                <header>
                    <div>
                        <h1 className="font-semibold text-4xl">Book Categories</h1>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-[#5B5B5B]">Select your favorite Categories</p>
                        <Link to="/">
                            {" "}
                            <p className="text-[#5B5B5B]">Switch to RoadMap</p>
                        </Link>
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
                    <p>Skip</p>
                </footer>
            </body>
        </React.Fragment>
    );
};

export default BookCategories;
