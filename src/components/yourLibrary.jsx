import { Authors, BookRead, ReaderProfile } from "../data/yourLibrary";
import { IoIosMenu } from "react-icons/io";
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
                {/* Header */}
                <header className="bg-gray-100 p-4 border-b border-gray-300">
                    <button className="text-gray-600 lg:hidden" onClick={toggleSidebar}>
                        <IoIosMenu className="text-2xl" />
                    </button>
                    <h1 className="text-xl font-bold">Dashboard</h1>
                </header>

                {/* Content */}
                <div className="p-4 flex-grow overflow-y-auto">
                    {/* Reader Profiles */}
                    <section className="mb-8">
                        <h2 className="text-lg font-bold mb-2">Reader Profiles</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {ReaderProfile &&
                                ReaderProfile.map((readerProfile) => (
                                    <div
                                        key={readerProfile.id}
                                        className="border border-gray-300 p-4 rounded-lg"
                                    >
                                        <img
                                            src={readerProfile.notification}
                                            alt="Profile"
                                            className="w-16 h-16 rounded-full mb-2"
                                        />
                                        <p className="font-bold">{readerProfile.name}</p>
                                        <img
                                            src={readerProfile.pic}
                                            alt="Profile"
                                            className="w-16 h-16 rounded-full"
                                        />
                                    </div>
                                ))}
                        </div>
                    </section>

                    {/* Recently Read Books */}
                    <section className="mb-8">
                        <h2 className="text-lg font-bold mb-2">Recently Read</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {BookRead &&
                                BookRead.map((bookRead) => (
                                    <div
                                        key={bookRead.id}
                                        className="border border-gray-300 p-4 rounded-lg"
                                    >
                                        <img
                                            src={bookRead.bookReadImage}
                                            alt="Book"
                                            className="w-full h-40 object-cover mb-2"
                                        />
                                        <p className="font-bold">{bookRead.title}</p>
                                        <p>{bookRead.name}</p>
                                    </div>
                                ))}
                        </div>
                    </section>

                    {/* Top Authors */}
                    <section>
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
                    </section>
                </div>
            </div>
        </div>
    );
};

export default YourLibrary;
