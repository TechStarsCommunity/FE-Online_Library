import React, { useState } from "react";
import "../styles/uploads.css";
import LeftSidebar from "../components/leftSideBar";
import { Tabs } from "../data/leftSideBarData";
import { IoIosMenu } from "react-icons/io";

const Uploads = () => {
    const [active, setActive] = useState(1);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const activeTabInfo = Tabs.find((tab) => tab.id === active);

    const toogleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <React.Fragment>
            <div className="flex">
                <button
                    className="transition-transform duration-300 transform hover:scale-110"
                    onClick={toogleSidebar}
                >
                    <IoIosMenu
                        style={{
                            fontSize: "40px",
                            color: "gray",
                            marginTop: "40px",
                            marginLeft: "20px",
                        }}
                    />
                </button>

                {sidebarVisible && (
                    <div
                        className={`bg-[#DFF6FF] h-full px-0 py-4 fixed mx-0 transition-all duration-300 ease-in-out ${
                            sidebarVisible ? "left-0" : "-left-[20.6rem]"
                        }`}
                    >
                        <LeftSidebar active={active} setActive={setActive} />
                    </div>
                )}

                <div className="flex-grow absolute right-0 min-h-100vh left-[20.6rem] pl-10">
                    {activeTabInfo && <activeTabInfo.component />}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Uploads;
