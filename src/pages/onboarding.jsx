import React, { useState } from "react";
import BookCategories from "./bookCategories";
import RoadMap from "./roadmap";

const Onboarding = () => {
    // const [active, setActive] = useState(1);
    const [show, setShow] = useState(true);
    return (
        <React.Fragment>
            <div className="flex">
                {show ? (
                    <BookCategories show={show} setShow={setShow} />
                ) : (
                    <RoadMap show={show} setShow={setShow} />
                )}
            </div>
        </React.Fragment>
    );
};

export default Onboarding;
