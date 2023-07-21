import React from "react";
import tech from "../assets/tech.png";

const CategoriesCard = ({ src, title, description }) => {
    return (
        <div className="categoriesCard grid gap-2">
            <figure>
                <img src={src} alt="" />
            </figure>
            <figcaption>
                <h3>{title}</h3>
                <p>{description}</p>
            </figcaption>
        </div>
    );
};

export default CategoriesCard;
