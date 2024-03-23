import { BiSolidUserCircle } from "react-icons/bi";
import { GoBook } from "react-icons/go";
import { HiOutlineDocumentDownload } from "react-icons/hi";
// import { LiaBookSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { SiGumroad } from "react-icons/si";

import BookDetails from "./../components/book";
import ContactComponent from "../components/contact";
import RoadMap from "./../components/roadmap";
import UploadContents from "../components/uploadContents";
// import YourLibrary from "../components/yourLibrary";

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
        path: "/popularbooks",
        component: BookDetails,
    },
    // {
    //     id: 3,
    //     name: "Your Library",
    //     Icon: <LiaBookSolid />,
    //     component: YourLibrary,
    // },
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
];
