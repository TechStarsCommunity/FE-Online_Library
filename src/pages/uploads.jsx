import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import LeftSidebar from "../components/leftSideBar";
import { Tabs } from "../data/leftSideBarData";

const Uploads = () => {
    const [active, setActive] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false); // Default to closed on mobile

    const activeTabInfo = Tabs.find((tab) => tab.id === active);

    const toggleSidebar = (event) => {
        event.stopPropagation();
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 898;
            setSidebarOpen(!isMobile);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex relative">
            <div className="flex">
                <button
                    className="transition-transform duration-300 transform hover:scale-110 cursor-pointer absolute right-0 lg:hidden block"
                    onClick={toggleSidebar}
                >
                    {sidebarOpen ? (
                        <MdClose
                            style={{
                                fontSize: "40px",
                                color: "gray",
                                marginTop: "40px",
                                marginLeft: "20px",
                            }}
                        />
                    ) : (
                        <MdMenu
                            style={{
                                fontSize: "40px",
                                color: "gray",
                                marginTop: "40px",
                                marginLeft: "20px",
                            }}
                        />
                    )}
                </button>

                {sidebarOpen && (
                    <div
                        className={`fixed top-0 left-0 w-screen h-screen bg-black opacity-${
                            sidebarOpen ? "50" : "0"
                        } transition-opacity duration-300 z-40`}
                        onClick={toggleSidebar}
                    ></div>
                )}
            </div>

            <div
                className={`flex-grow min-h-100vh absolute right-0 ${
                    sidebarOpen ? "left-[25%]" : "left-0"
                } ml-0`}
            >
                {activeTabInfo && <activeTabInfo.component />}
            </div>

            {sidebarOpen && (
                <div
                    className={`bg-[#DFF6FF] h-full px-0 py-4 fixed mx-0 transition-all duration-300 ease-in-out z-50 ${
                        sidebarOpen ? "top-0" : "-top-full"
                    }`}
                >
                    <LeftSidebar active={active} setActive={setActive} />
                </div>
            )}
        </div>
    );
};

export default Uploads;
