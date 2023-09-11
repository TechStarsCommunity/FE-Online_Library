import React, { useState } from "react";

function CategoriesButton({ initialText }) {
    const [isClicked, setIsClicked] = useState(false);
    // const [isHovered, setIsHovered] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    // Define the class name based on the button's state and hover state
    const buttonClassName = `text-[#8A8A8A] hover:bg-[#8A8A8A]
                                                 
                                                  hover:bg-zinc-400  
                          border-2 p-2 text-base rounded-[3.75rem]
                         transition-all duration-300`;

    // Define the style based on the button's click state
    const buttonStyle = {
        backgroundColor: isClicked ? "#D1FFF3" : "white",
    };

    return (
        <button
            className={buttonClassName}
            style={buttonStyle}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {initialText}
        </button>
    );
}

export default CategoriesButton;
