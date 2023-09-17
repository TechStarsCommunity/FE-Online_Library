import React, { useState } from "react";
import "../styles/uploads.css";
import LeftSidebar from "../components/leftSideBar";
import { Tabs } from "../data/leftSideBarData";
const Uploads = () => {
    const [active, setActive] = useState(1);
    const activeTabInfo = Tabs.find((tab) => tab.id === active);
    return (
        <React.Fragment>
            <div className="flex">
                <div className="bg-[#DFF6FF] h-full px-0 py-4 fixed mx-0">
                    <LeftSidebar active={active} setActive={setActive} />
                </div>
                <div className="flex-grow absolute right-0 min-h-100vh left-[20rem]">
                    {activeTabInfo && <activeTabInfo.component />}
                </div>
            </div>
        </React.Fragment>
    );
};
export default Uploads;
