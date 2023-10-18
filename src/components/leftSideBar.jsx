import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import booksLabLogo from "/booksLab_logo.png";
import { Tabs } from "../data/leftSideBarData";
import { LiaBookSolid } from "react-icons/lia";
import { GoBook } from "react-icons/go";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { SiGumroad } from "react-icons/si";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import UploadContents from "../components/uploadContents";
import RoadMap from "./../components/roadmap";
import BookDetails from "./../components/book";
import ContactComponent from "../components/contact";
import Login from '../pages/login';
import YourLibrary from "../components/yourLibrary";
import "../styles/uploads.css";
import { AiOutlineLogout } from "react-icons/ai";
import {
    // RxDashboard,
    FaBars,
    // GoBook ,
    // LiaBookSolid ,
    // SiGumroad,
    // HiOutlineDocumentDownload,
    // BiSolidUserCircle 
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const LeftSidebar = ({ children }) => {
    const location = useLocation;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            id: 1,
            name: "Dashboard",
            Icon: <RxDashboard />,
            path: "/dashBoard",
            component: UploadContents,
        },
        {
            id: 2,
            name: "Books",
            Icon: <GoBook />,
            path: "/books",
            component: BookDetails,
        },
        {
            id: 3,
            name: "Your Library",
            Icon: <LiaBookSolid />,
            path: "/yourLibrary",
            component: YourLibrary,
        },
        {
            id: 4,
            name: "Roadmap",
            Icon: <SiGumroad />,
            path: "/roadMap",
            component: RoadMap,
        },
        {
            id: 5,
            name: "Upload",
            Icon: <HiOutlineDocumentDownload />,
            path: "/uploads",
            component: UploadContents,
        },
        {
            id: 6,
            name: "Profile",
            Icon: <BiSolidUserCircle />,
            path: "/profile",
            component: ContactComponent,
        },
        {
            id: 7,
            name: "Logout",
            Icon: <AiOutlineLogout />,
            path: "/login",
            component: Login,
        },
    ]

    
    return (
        <div className="container">
            <div style={{ width: isOpen ? "150px" : "20px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none"}} className="logo "><img src={booksLabLogo} alt="Logo" /></h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                        
                    </div>
                </div>
                {
                    menuItem.map((data) => {
                        const {id, name, Icon, path, component} = data;
                        const isActive = location.pathname === path;
                        return(
                        <NavLink  key={id} to={path} onClick={isActive} className="link" activeclassName="active" >
                            
                                <div className='flex'>
                                    <div className='flex justify-center'>
                                        <div className="icon text-black me-4 text-[24px] pt-2">{Icon}</div>
                                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text text-black">{name}</div>
                                    
                                    </div>
                                   
                                </div>
                    
                        </NavLink>
                        )})
                }
                
            </div>
            <main>{children}</main>
            
        </div>
    );
};














// import React, { useState } from "react";
// import booksLabLogo from "/booksLab_logo.png";
// import { Tabs } from "../data/leftSideBarData";
// import { AiOutlineLogout } from "react-icons/ai";
// import { IoIosMenu, IoIosClose } from "react-icons/io";
// import { NavLink, useLocation } from "react-router-dom";
// import Button from "./button";

// const LeftSidebar = () => {
//     const location = useLocation();
//     const [sidebarOpen, setSidebarOpen] = useState(true);

//     const toogleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     // const handleClick = (id) => {
//     //     setActive(id);
//     // };

//     return (
//         <React.Fragment>
//             <div
//                 className={`relative h-full w-80 ${
//                     sidebarOpen ? "" : "hidden"
//                 } transition-all duration-300 ease-in-out`}
//             >
//                 <div className="flex justify-between ">
//                     <h1 className="mt-[50px] mb-[50px] ml-5 w-[60%]">
//                         <img src={booksLabLogo} alt="Logo" />
//                     </h1>

//                     <button
//                         className="pr-3 transition-transform duration-300 transform hover:scale-110"
//                         onClick={toogleSidebar}
//                     >
//                         {sidebarOpen ? (
//                             <IoIosClose style={{ fontSize: "40px", color: "gray" }} />
//                         ) : (
//                             <IoIosMenu style={{ fontSize: "40px", color: "gray" }} />
//                         )}
//                     </button>
//                 </div>

//                 <div className="mt-[100px]">
//                     {Tabs.map((data) => {
//                         const { id, name, Icon, path } = data;
//                         const isActive = location.pathname === path;
//                         return (
//                             <NavLink
//                                 key={id}
//                                 // onClick={() => setActive(id)}
//                                 to={path}
//                                 className={`mb-[25px] text-[1rem] mx-5 flex text-center text-[#191919] font-serif font-medium
//                               px-8 button cursor-pointer 
//                               ${isActive ? "button-active-style" : ""}`}
//                                 //   ${  active === id ? "button-active-style" : ""}
//                             >
//                                 <span className="me-4 text-[24px]">{Icon}</span>
//                                 <button>{name}</button>
//                                 {/* <Button className='text-black'>{name}</Button> */}
//                             </NavLink>
//                         );
//                     })}

//                     <div
//                         className={`text-[1rem] mx-5 text-center text-[#191919] font-serif font-medium
//                         px-8 button cursor-pointer mt-12`}
//                     >
//                         <div className="bottom-20 absolute right-0 left-0 flex items-center justify-center gap-4">
//                             <span className="text-[24px]">
//                                 {" "}
//                                 <AiOutlineLogout />
//                             </span>

//                             <button>Logout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// };

export default LeftSidebar;
