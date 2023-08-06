import React from "react";
import tech from "../assets/tech.png";
import { Link } from "react-router-dom";

const CategoriesCard = ({ src, title, description }) => {
    return (
        <div className="categoriesCard grid gap-2">
            <Link to="">
                <figure className="w-full fig">
                    <img src={src} alt="" className="h-full" />
                </figure>
            </Link>
            <figcaption>
                <Link to="">
                    <h3>{title}</h3>
                </Link>
                <p>{description}</p>
            </figcaption>
        </div>
    );
};

export default CategoriesCard;
