import React from "react";

const SearchAside = () => {
    return (
        <React.Fragment>
            <div className="flex gap-2 flex-wrap w-40 items-center">
                <div className="w-1/3 ">
                    <img src={"/image_icon.png"} alt="" className="w-full h-full" />
                </div>
                <p>Editors Peak</p>
            </div>
        </React.Fragment>
    );
};

export default SearchAside;
