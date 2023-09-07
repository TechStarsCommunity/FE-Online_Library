import React from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";
import CategoriesButton from "../components/categoriesButton";

// change the name of the function to match the name of the file
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
                    <div className="my-12 flex flex-wrap gap-6  ">
                        <CategoriesButton initialText="Editor's Pick" />
                        <CategoriesButton initialText="Frontend Development" />
                        <CategoriesButton initialText="Product Design" />
                        <CategoriesButton initialText="Academic & Education" />
                        <CategoriesButton initialText="Biography" />
                        <CategoriesButton initialText="Children & Youth" />
                        <CategoriesButton initialText="Fiction & Literature" />
                        <CategoriesButton initialText="Religion" />
                        <CategoriesButton initialText="Lifestyle" />
                        <CategoriesButton initialText="Politics & Laws" />
                        <CategoriesButton initialText="Science & Research" />
                        <CategoriesButton initialText="Economics" />
                        <CategoriesButton initialText="Food" />
                        <CategoriesButton initialText="Marketing" />
                        <CategoriesButton initialText="Parenting" />
                        <CategoriesButton initialText="Relationships" />
                        <CategoriesButton initialText="Backend Development" />
                        <CategoriesButton initialText="Project Management" />
                        <CategoriesButton initialText="Arts & Design" />
                        <CategoriesButton initialText="Business & Career" />
                        <CategoriesButton initialText="Environment" />
                        <CategoriesButton initialText="Health & Fitness" />
                        <CategoriesButton initialText="Personal Growth" />
                        <CategoriesButton initialText="Tech" />
                        <CategoriesButton initialText="Entertainment" />
                        <CategoriesButton initialText="History" />
                        <CategoriesButton initialText="Motivation" />
                        <CategoriesButton initialText="Psychology" />
                        <CategoriesButton initialText="Sports" />
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

// Also change the name of the function here
export default BookCategories;
