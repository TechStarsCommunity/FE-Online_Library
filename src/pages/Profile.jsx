import React from "react"
import LeftSidebar from "../components/leftSideBar"
import { AiOutlineSetting } from "react-icons/ai"


const Profile = () => {
  return (
    <>
    <div className="flex h-screen max-w-screen">
         <LeftSidebar />
        <div className="flex justify-between m-10 ">
            <div className="flex flex-col">
                <div className=" relative bg-cover bg-center bg-[url('/Header.jpg')] h-32 p-4 rounded-md">
                <img src="/women.png" 
                alt="image" 
                className=" absolute rounded-full h-2/4 bottom-2 "
                />
                </div>
            </div>
            <div className="ml-5 justify-end">
                <AiOutlineSetting /> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile