import Button from "./button";

const ContactComponent = (props) => {
    return (
        <section className={props.className}>
            <div className="container mx-auto w-full flex flex-wrap py-[24px] px-10">
                <div className=" w-full md:w-1/2">
                    <h1 className="text-[24px] md:text-[30px] text-[#001E50] font-bold lg:text-[36px] mb-16 mt-0">
                        Contact Us
                    </h1>
                    <div className=" flex items-center space-x-4 mb-10">
                        <img src="/mail.png" alt="" className="w-12 h-12" />
                        <a
                            href="mailto:techstarscommunity@gmail.com"
                            className="text-[#727272] text-[18px]"
                        >
                            bookslab@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 mb-10">
                        <img src="/phone.png" alt="image of phone" className="w-12 h-12" />
                        <a href="tel:+00018494724745" className="text-[#727272] text-[18px]">
                            +000 184 947 24745
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 ">
                        <img
                            src="/location-pin.png"
                            alt="image of location"
                            className="w-12 h-12"
                        />
                        <a href="#" className="text-[#727272] text-[18px]">
                            285 Office Address, LGA, State, Country
                        </a>
                    </div>
                    <div className="mt-12 flex items-center gap-4">
                        <Button
                            variant="primary"
                            style={{
                                width: "150px",
                                borderRadius: "25px",
                                fontSize: "16px",
                                height: "50px",
                            }}
                            to="#contact-form"
                        >
                            Contact us
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="/contact_us_illustration.png"
                        alt="image of frontdesk personnel"
                        className="w-144 h-144"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;
