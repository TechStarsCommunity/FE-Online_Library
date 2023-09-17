import React from "react"
import LeftSidebar from "../components/leftSideBar"
import Button from "../components/button"
import { AiOutlineSetting } from "react-icons/ai"
import { PiToggleLeft } from "react-icons/pi"
import { BiHide } from "react-icons/bi"


const Profile = () => {
  return (
    <>
    <div className="flex h-screen w-screen">
         <LeftSidebar />
        <div className="flex justify-between m-10 ">
            <div className="flex flex-col place-content-between">
                <div className=" relative bg-cover bg-center bg-[url('/Header.jpg')] h-32 p-4 rounded-md">
                  <img src="/women.png" 
                  alt="image" 
                  className=" absolute rounded-full h-2/4 bottom-2 "
                  />
                </div>
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="flex flex-col">
                        <p>Name</p>
                        <p>Akeem</p>
                      </div>
                      <div className="flex flex-col">
                        <p>Location</p>
                        <p>@akeem_123star</p>
                      </div>
                    </div>
                    <div>
                      <p>Mail</p>
                      <p>akeem123star@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="flex flex-col">
                        <p>Phone number </p>
                        <p>+234 8020653695</p>
                      </div>
                      <div className="flex flex-col">
                        <p>Location</p>
                        <p>Victorial island ibadan</p>
                      </div>
                    </div>
                    <div>
                      <p>password</p>
                      <div className="flex">
                        <p>...........................................</p><BiHide />
                      </div>
                    </div>
                  </div>
                </div>
                <Button borderVariant="noRadius" variant="primary" className="w-28 text-sm h-10 text-black">Edit Profile
                </Button>
                <div className="flex justify-between">
                  <div className="flex flex-col text-black">
                    <p>Notification </p>
                    <p>Choose how you want to receive your notification </p>
                    <div className="flex justify-between">
                      <p>Email</p><PiToggleLeft/>
                    </div>
                    <div className="flex justify-between">
                      <p>Sms</p><PiToggleLeft/>
                    </div>
                    <div className="flex justify-between">
                      <p>Desktop notification</p><PiToggleLeft/>
                    </div>
                  </div>
                  <div className="flex flex-col text-black">
                    <p>Appearance </p>
                    <p>Change you view booklab </p>
                    <div className="flex justify-between">
                      <p>Dark Mode</p><PiToggleLeft/>
                    </div>
                    <div className="flex justify-between">
                      <p>Light Mode</p><PiToggleLeft/>
                    </div>
                    <div className="flex justify-between">
                      <p>Eye care mode</p><PiToggleLeft/>
                    </div>
                  </div>
                </div>
            </div>
            <div className="ml-5 justify-end"><AiOutlineSetting /> </div>
        </div>
    </div>
    </>
  )
}

export default Profile