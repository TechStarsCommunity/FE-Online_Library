import { useState } from 'react';

export const Toggle = ({ toggled, onClick }) => {
    const [isToggled, setToggled] = useState(toggled);

    const handleToggle = () => {
        const newState = !isToggled;
        setToggled(newState);
        onClick(newState);
    };

    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={isToggled}
                    onChange={handleToggle}
                    className="hidden"
                />
                <div className="toggle-wrapper w-5 h-3 bg-[#525050] rounded-full p-1 transition duration-300 ease-in-out">
                    <div
                        className={`toggle-button w-2 h-2 bg-[#ffffff] rounded-full shadow-md transform ${
                            isToggled ? 'translate-x-1.5 -translate-y-0.5' : '-translate-x-1 -translate-y-0.5'
                        } transition duration-300 ease-in-out`}
                    ></div>
                </div>
            </div>
        </label>
    );
};

export default Toggle;
