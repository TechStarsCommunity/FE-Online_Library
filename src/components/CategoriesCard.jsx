import React from "react";
import tech from "../assets/tech.png";

const CategoriesCard = ({ src, title, description }) => {
    return (
        <div className="categoriesCard grid gap-2">
            <figure className="w-full fig">
                <img src={src} alt="" className="h-full" />
            </figure>
            <figcaption>
                <h3>{title}</h3>
                <p>{description}</p>
            </figcaption>
        </div>
    );
};

export default CategoriesCard;
