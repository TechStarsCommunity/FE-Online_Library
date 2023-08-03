import React from "react";
import Button from "./button/button";

const ContactComponent = () => {
    return (
        <React.Fragment>
            <section className="py-10 px-4">
                <div className="container mx-auto w-90% flex flex-wrap">
                    <div className=" w-full md:w-1/2">
                        <h1 className="text-[48px] md:text-[30px] my-[20px] text-[#001E50] font-bold lg:text-[36px] mb-16 mt-0">
                            Contact Us
                        </h1>
                        <div className=" flex items-center space-x-4 mb-10">
                            <img src="src/assets/mail.png" alt="" className="w-12 h-12" />
                            <a
                                href="techstarscommunity@gmail.com"
                                className="text-[#727272] text-[24px]"
                            >
                                bookslab@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-4 mb-10">
                            <img src="src/assets/phone.png" alt="" className="w-12 h-12" />
                            <a href="tel:+00018494724745" className="text-[#727272] text-[24px]">
                                +000 184 947 24745
                            </a>
                        </div>
                        <div className="flex items-center space-x-4 mb-10">
                            <img src="src/assets/location-pin.png" alt="" className="w-12 h-12" />
                            <a href="#" className="text-[#727272] text-[24px]">
                                285 Office Address, LGA, State, Country
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="src/assets/contact_us_illustration.png" className="w-144 h-144"/>
                    </div>
                    <Button>Contact Us</Button>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ContactComponent;
