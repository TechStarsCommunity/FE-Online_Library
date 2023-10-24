import React from "react";
import user from "/user.jpg"

const ReviewCard = ({ comment, userName, stack }) => {
    return (
        <div className="w-full grid gap-[25px] p-[20px] rounded-md bg-[#fff] relative">
            <div className="flex items-center gap-[15px] rounded-md w-full">
                <div className="w-[50px] h-[50px] rounded-[50%] bg-[grey]">
                    <img
                        src={user}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <div className="w-full">
                    <p className="text-base font-bold">{userName}</p>
                    <p className="text-base line-clamp-2">{stack} Developer</p>
                </div>
            </div>
            <div className="w-full">
                <p className="text-lg line-clamp-3">{comment}</p>
            </div>
            <div className="flex justify-end flex-col items-end self-end">
                <p className="text-sm">10/12/2023</p>
                <p className="text-sm">4:40pm</p>
            </div>
        </div>
    );
};

export default ReviewCard;
