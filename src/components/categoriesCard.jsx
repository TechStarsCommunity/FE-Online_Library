import { Link } from "react-router-dom";
import "../styles/categoriesCard.css";

const CategoriesCard = ({ src, title, description }) => {
    return (
        <div className="categoriesCard grid gap-2">
            <Link to="#">
                <figure className="w-full fig">
                    <img src={src} alt="" className="h-full" />
                </figure>
            </Link>
            <figcaption>
                <h3>{title}</h3>
                <p>{description}</p>
            </figcaption>
        </div>
    );
};

export default CategoriesCard;
