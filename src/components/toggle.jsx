import { useState } from "react";
import ReactSwitch from "react-switch";

const ToogleSwitch = () => {
    const [checked, setChecked] = useState(true);

    const handleClick = (val) => {
        setChecked(val);
    };

    return <ReactSwitch checked={checked} onChange={handleClick} className="m-[5px]" />;
};

export default ToogleSwitch;
