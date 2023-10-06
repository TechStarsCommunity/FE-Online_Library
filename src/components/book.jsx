import React from "react";
import Button from "./button";
import "../styles/App.css";
import { FiDownload } from "react-icons/fi";

const BookDetails = () => {
    return (
        <React.Fragment>
            <div className="p-[2rem]">
                <div className="flex items-center justify-between h-[5rem]">
                    <h1 className="h1">Book Details</h1>
                    <Button className="bg-gradient-to-r from-[#10B2F3] to-[#35EAB9] w-[12.5rem] rounded-md-[.5rem]">
                        Go Back
                    </Button>
                </div>
                <div className="flex gap-[2rem] pt-[2.5rem]">
                    <img
                        src="/book-detail-poster.jpg"
                        alt="book poster"
                        className="w-[15rem] h-[15rem]"
                    />
                    <div className="flex flex-col gap-[3.5rem] p-[.3rem]">
                        <h1 className="h1">Starting a successful Career in Tech</h1>
                        <p className="text-[#858585] text-[1.25rem] font-serif">
                            <span className="font-semibold">Uploaded by:</span> Oluwaben Akeem
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[1rem]">
                                <img src="/details-roadmap.svg" alt="" />
                                <span className="text-[#858585] text-[1rem] font-serif">
                                    Frontend Development
                                </span>
                            </div>
                            <p className="text-[1rem] font-serif text-[#858585]">
                                <span className="text-[#001E50] font-semibold">Level:</span>{" "}
                                Beginner
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-[#858585] text-[1.25rem] font-serif font-normal mt-[2.5rem] leading-tight">
                    Whether you are a recent graduate, a career changer, or simply passionate about
                    technology, “ Starting a Successful career in Tech” is your compass for
                    embarking on a miraculous journey. Unlock the doors to endless opportunities,
                    unleash your potential, discover the fundamental principles and core technology
                    driving the digital age and lay the foundation for a successful and fulfilling
                    career in the world of technology.
                </p>
                <Button className="w-100 bg-gradient-to-r from-[#10B2F3] to-[#35EAB9] mt-[8.3125rem]">
                    <FiDownload className="inline" /> Download
                </Button>
            </div>
        </React.Fragment>
    );
};

export default BookDetails;
