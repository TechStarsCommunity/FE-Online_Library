import { BookRead, ReaderProfile } from "../data/yourLibrary";
import { IoIosMenu } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import LeftSidebar from "../components/leftSideBar";
import { useState } from "react";

const YourLibrary = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="h-screen flex overflow-hidden">
            {/* Left Sidebar */}
            <div
                className={`bg-gray-200 w-64 h-full transition-all duration-300 ease-in-out ${sidebarVisible ? "block" : "hidden"}`}
            >
                <LeftSidebar />
            </div>

            {/* Main Content Area */}

            <div className="flex flex-col flex-grow">
                <header className="pt-5 px-10">
                    <button className="text-gray-600 lg:hidden" onClick={toggleSidebar}>
                        <IoIosMenu className="text-2xl" />
                    </button>
                    <div className="flex justify-between gap-20 md:gap-0 md:pr-40">
                        <h1 className="text-2xl font-semibold">Currently Reading</h1>
                        <button className="font-semibold text-sm shadow-lg rounded-lg border px-10 md:p-2 md:px-4">
                            View all
                        </button>
                    </div>
                    <section className="py-3">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {ReaderProfile &&
                                ReaderProfile.map((readerProfile) => (
                                    <div
                                        key={readerProfile.id}
                                        className="flex items-center  space-x-7 mb-3"
                                    >
                                        <button>
                                            <IoIosNotificationsOutline className="text-2xl " />
                                        </button>
                                        <div className="flex items-center space-x-3">
                                            <p className="font-bold">{readerProfile.name}</p>
                                            <img
                                                src={readerProfile.pic}
                                                alt="Profile"
                                                className="w-12 rounded-full "
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </section>
                </header>

                {/* Content */}

                <div className="mx-4 flex-grow overflow-y-auto">

                    <section className="mb-8">
                        <h2 className="text-lg font-bold m-4">Roadmap</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-4 mx-4 gap-2">
                            {BookRead &&
                                BookRead.map((bookRead) => (
                                    <div
                                        key={bookRead.id}
                                        className="md:w-52 p-4 shadow-lg mb-2 border space-y-1"
                                    >
                                        <img
                                            src={bookRead.bookReadImage}
                                            alt="Book"
                                            className="w-full md:w-44 md:h-32 rounded-2xl object-cover mb-4"
                                        />
                                        <p className="font-bold">{bookRead.title}</p>
                                        <p className="text-sm">{bookRead.name}</p>
                                        <div className="flex items-center gap-1">
                                            <img
                                                src={bookRead.category}
                                                alt="category"
                                                className="w-6"
                                            />
                                            <p className="text-gray-500 text-sm">
                                                Frontend-Development
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </section>

                    {/* Top Authors */}
                    {/* <section>
                        <h2 className="text-lg font-bold mb-2">Top Authors</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {Authors &&
                                Authors.map((author) => (
                                    <div
                                        key={author.id}
                                        className="border border-gray-300 p-4 rounded-lg"
                                    >
                                        <img
                                            src={author.authorImage}
                                            alt="Author"
                                            className="w-full h-40 object-cover mb-2"
                                        />
                                        <p className="font-bold">{author.name}</p>
                                    </div>
                                ))}
                        </div>
                    </section> */}
                </div>
            </div>
        </div>
    );
};

export default YourLibrary;
