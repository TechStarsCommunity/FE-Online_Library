import React, { useState } from "react";
import "../styles/categoriesButton.css";

function CategoriesButton({ initialText }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonClassName = `button ${isClicked ? "clicked" : ""}`;

  return (
    <button
      className={buttonClassName}
      onClick={handleClick}
    >
      {initialText}
    </button>
  );
}

export default CategoriesButton;
