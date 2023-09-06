import React from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";

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
                    <div className="mt-12">
                        <Button className="border-gray-500">Contact Us</Button>
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
