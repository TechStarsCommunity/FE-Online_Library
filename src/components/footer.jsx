import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Logo from "/booksLab_logo.png";

const Footer = () => {
    return (
        <>
            <img src="/logo.png" alt="" />
            <footer className="bg-[#35EAB91F]  pt-[2rem] sm:pt-[5rem] pl-3 pb-[100px] sm:pl-12 overflow-x-hidden">
                <div className="lg:flex  g-x-12">
                    <div className="md:basis-1/3 lg:basis-1/2 mb-[1rem] col-start-1 col-end-2 sm:my-[10px] md:text-start text-center">
                        <div className="mb-[1rem] lg:mb-[6rem]">
                            <div className="footer_logo w-[200px] mx-auto md:ml-[0]">
                                <img src={Logo} alt="" />
                            </div>
                            <p className="text-[13px] md:text-md lg:text-lg mt-4 font-medium ">
                                {" "}
                                Copyright {new Date().getFullYear()} BooksLab. All right reserved!
                            </p>
                        </div>
                        <p className="text-[17px] font-bold tracking-normal">
                            Subscribe to our newsletter
                        </p>
                        <div className="flex mt-[1rem] w-full md:w-[50%] ml-[20px] md:ml-[0]">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="w-[75%] h-[40px] bg-transparent border-b-4 outline-none border-b-[#10B2F3] border-transparent rounded-none px-2"
                            />
                            <button>
                                <span className="material-symbols-outlined text-[#fff] bg-gradient-to-r from-[#10B2F3] to-[#35EAB9] place-self-center p-2">
                                    keyboard_arrow_right
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-[20px] md:[40px] ml-5 md:basis-1/2 lg:basis-1/3 md:flex md:justify-between pr-12 grow">
                        <div className="flex flex-col gap-3 font-light">
                            <h4 className="font-medium text-[#10B2F3] text-[17px]">Navigation</h4>
                            <Link
                                to="/categories"
                                className="text-[#001E50] text-[15px] hover:text-[#10B2F3]"
                            >
                                Top Categories
                            </Link>
                            <Link
                                to="/road-map"
                                className="text-[#001E50] text-[15px] hover:text-[#10B2F3]"
                            >
                                Road Map
                            </Link>
                            <Link
                                to="/about"
                                className="text-[#001E50] text-[15px] hover:text-[#10B2F3]"
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="text-[#001E50] text-[15px] hover:text-[#10B2F3]"
                            >
                                Contact Us
                            </Link>
                        </div>
                        <div className="mt-[20px] lg:mt-[0] flex flex-col gap-3 font-light">
                            <h4 className="font-medium text-[17px] text-[#10B2F3]">About</h4>
                            <Link
                                to="/about"
                                className="text-[#001E50] text-[15px] hover:text-[#10B2F3]"
                            >
                                About Bookslab
                            </Link>
                            <Link
                                to="/terms"
                                className="text-[#001E50] text-[15px] hover:text-[#10B2F3]"
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                to="/uploads"
                                className="text-[#001E50] text-[15px] hover:text-[#10B2F3]"
                            >
                                Books upload policy
                            </Link>
                            <Link
                                to="/policies"
                                className="text-[#001E50] text-[15px] hover:text-[#10B2F3]"
                            >
                                Privacy Policies
                            </Link>
                        </div>
                        <div className="flex flex-row-reverse mt-[20px] lg:mt-[0] md:flex-col justify-between">
                            <Link to={`#top`} className="text-center text-[#fff]">
                                <span className="material-symbols-outlined bg-gradient-to-r from-[#10B2F3] to-[#35EAB9] p-3 rounded-full">
                                    keyboard_arrow_up
                                </span>
                            </Link>
                            <div className="flex flex-row gap-4">
                                <button>
                                    <BsFacebook />
                                </button>
                                <button>
                                    <BsTwitter />
                                </button>
                                <button>
                                    <BsInstagram />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                            <p className="text-center">2023 BooksLab. All right reserved!</p>
                        </div> */}
            </footer>
        </>
    );
};

export default Footer;
