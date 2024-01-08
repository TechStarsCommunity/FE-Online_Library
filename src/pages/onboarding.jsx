import { useState } from "react";
import BookCategories from "./bookCategories";
import RoadMap from "./roadmap";

const Onboarding = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="flex">
            {show ? (
                <BookCategories show={show} setShow={setShow} />
            ) : (
                <RoadMap show={show} setShow={setShow} />
            )}
        </div>
    );
};

export default Onboarding;
