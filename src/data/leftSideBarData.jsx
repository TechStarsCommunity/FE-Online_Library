import { LiaBookSolid } from "react-icons/lia";
import { GoBook } from "react-icons/go";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { SiGumroad } from "react-icons/si";
import UploadContents from "../components/uploadContents";
import RoadMap from "./../components/roadmap";
import ContactComponent from "../components/contact";
import React from "react";

export const Tabs = [
    {
        id: 1,
        name: "Dashboard",
        Icon: <RxDashboard />,
        component: UploadContents,
    },
    {
        id: 2,
        name: "Books",
        Icon: <GoBook />,
        component: UploadContents,
    },
    {
        id: 3,
        name: "Your Library",
        Icon: <LiaBookSolid />,
        component: UploadContents,
    },
    {
        id: 4,
        name: "Roadmap",
        Icon: <SiGumroad />,
        component: RoadMap,
    },
    {
        id: 5,
        name: "Upload",
        Icon: <HiOutlineDocumentDownload />,
        component: UploadContents,
    },
    {
        id: 6,
        name: "Profile",
        Icon: <BiSolidUserCircle />,
        component: ContactComponent,
    },
];
