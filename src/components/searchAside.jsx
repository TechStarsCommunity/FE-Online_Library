import React from "react";
import { topContent, topResult } from "../data/search";

const SearchAside = () => {
    return (
        <React.Fragment>
            <div className="flex gap-8 flex-row items-center text-[.9rem] font-normal mr-[1.5rem] mt-[6.5rem]">
                <div className="flex flex-col gap-2 ml-8 w-[40%]">
                    {topResult.map((item) => (
                        <div className="flex gap-6" key={item.id}>
                            <div className="">
                                <img src={item.img} alt="alt" className="w-[2.2rem] h-[2.2rem]" />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 w-[40%]">
                    {topContent.map((item) => (
                        <div className="flex gap-6" key={item.id}>
                            <div className="">
                                <img
                                    src="/editor-image.svg"
                                    alt={item.name}
                                    className="w-[2.2rem] h-[2.2rem]"
                                />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default SearchAside;
