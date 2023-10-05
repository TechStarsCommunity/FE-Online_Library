import React from "react";

const ReviewCard = ({ comment, userName, stack }) => {
    return (
        <div className="w-full grid gap-[25px] p-[20px] rounded-md bg-[#fff] relative">
            <div className="flex items-center gap-[15px]  rounded-md ">
                <div className="w-[50px] h-[50px] rounded-[50%] bg-[grey]">
                    <img
                        src="http://localhost:5173/contact_us_illustration.png"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <div>
                    <p className="text-lg md:text-xl font-bold">{userName}</p>
                    <p className="text-lg md:text-xl">{stack}Developer</p>
                </div>
            </div>
            <div className="w-full">
                <h3 className="text-xl md:text-2xl">“{comment}”</h3>
            </div>
            <div className="flex justify-end flex-col items-end self-end">
                <p>10/12/2023</p>
                <p>4:40pm</p>
            </div>
        </div>
    );
};

export default ReviewCard;
