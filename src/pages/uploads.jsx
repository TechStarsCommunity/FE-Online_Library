import React, { useState } from "react";
import "../styles/uploads.css";
import LeftSidebar from "../components/leftSideBar";
import { Tabs as Tabs } from "../data/leftSideBarData";

const Uploads = () => {
    const [active, setActive] = useState(1);
    const activeTabInfo = Tabs.find((tab) => tab.id === active);
    return (
        <React.Fragment>
            <div className="grid grid-cols-5 gap-4 w-full overflow-x-none">
                <div className="col-span-2 bg-[#DFF6FF] h-screen px-4 py-4 fixed ">
                    <LeftSidebar active={active} setActive={setActive} className="" />
                </div>
                <div className="col-span-3 ml-[400px]">
                    {activeTabInfo && <activeTabInfo.component />}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Uploads;
