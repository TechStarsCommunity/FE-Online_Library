// Desc: Left side bar data
import { LiaBookSolid } from "react-icons/lia";
import { GoBook } from "react-icons/go";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { SiGumroad } from "react-icons/si";
import UploadContents from "../components/uploadContents";

export const Tabs = [
    {
        id: 1,
        name: "Dashboard",
        icon: <RxDashboard />,
        component: "Dashboard",
    },
    {
        id: 2,
        name: "Books",
        icon: <GoBook />,
        component: "Books",
    },
    {
        id: 3,
        name: "Your Library",
        icon: <LiaBookSolid />,
        component: "Library",
    },
    {
        id: 4,
        name: "Roadmap",
        icon: <SiGumroad />,
        component: "RoadMap",
    },
    {
        id: 5,
        name: "Upload",
        icon: <HiOutlineDocumentDownload />,
        component: UploadContents,
    },
    {
        id: 6,
        name: "Profile",
        icon: <BiSolidUserCircle />,
        component: "Profile",
    },
];
