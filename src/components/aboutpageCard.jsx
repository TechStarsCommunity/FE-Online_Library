import "../styles/aboutpageCard.css";

const AboutPageCard = ({ name, title, image }) => {
    return (
        <div className="aboutpage__card-container">
            <img src={image} alt="user-image" className="card__image" />
            <h2 className="card__name">{name}</h2>
            <p className="card__title">{title}</p>
        </div>
    );
};

export default AboutPageCard;
