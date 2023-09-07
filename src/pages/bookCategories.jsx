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
                    <div className="my-12 flex flex-wrap gap-6  ">
                        <button className="border-solid  border-[#8A8A8A]  p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Education
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Technology
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Frontend Development
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Product Design
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Javascript
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Editor's choice
                        </button>
                        <button className="border-solid  border-[#8A8A8A]  p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Education
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Technology
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Frontend Development
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Product Design
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Javascript
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Editor's choice
                        </button>
                        <button className="border-solid  border-[#8A8A8A]  p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Education
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Technology
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Frontend Development
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Product Design
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Javascript
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Editor's choice
                        </button>
                        <button className="border-solid  border-[#8A8A8A]  p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Education
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Technology
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Frontend Development
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Product Design
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                            Javascript
                        </button>
                        <button className="border-solid  border-[#8A8A8A] p-2 text-base border-2 rounded-[3.75rem] text-[#8A8A8A]">
                        Editor's choice
                        </button>
                    </div>
                </main>
                <footer className="flex justify-between" >
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
