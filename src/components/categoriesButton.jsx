import { useState } from "react";

import "../styles/categoriesButton.css";

const CategoriesButton = ({ initialText }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const buttonClassName = `button ${isClicked ? "clicked" : ""}`;

    return (
        <button className={buttonClassName} onClick={handleClick}>
            {initialText}
        </button>
    );
};

export default CategoriesButton;
