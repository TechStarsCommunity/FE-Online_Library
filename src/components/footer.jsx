import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="bg-[#dffcf4] flex flex-col gap-12 pt-[5rem] pb-6 pl-12 overflow-x-hidden">
                <div className="grid grid-cols-4">
                    <div className="w-[5rem] h-[3rem] col-start-1 col-end-2">
                      <div className="mb-8">
                        <img src="src/assets/logo.png" alt="footer logo" />
                        <p className="text-center">2023 BooksLab. All right reserved!</p>
                      </div>
                      <p>Subscribe to our newsletter</p>
                      <div className="flex">
                        <input type="text" placeholder="Email address" />
                        {/* <span class="material-symbols-outlined">keyboard_arrow_right</span> */}
                        <img src='src/assets/arrow-right.png' alt="" />
                      </div>
                    </div>
                    <div className="col-end-6 col-span-3 grid grid-cols-3">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-2xl">Navigation</h4>
                                <Link to="/categories" className="text-[#001E50] text-xs hover:text-[#10B2F3]">
                                    Top Categories
                                </Link>
                                <Link to="/road-map" className="text-[#001E50] text-xs hover:text-[#10B2F3]">
                                    Road Map
                                </Link>
                                <Link to="/about" className="text-[#001E50] text-xs hover:text-[#10B2F3]">
                                    About
                                </Link>
                                <Link to="/contact" className="text-[#001E50] text-xs hover:text-[#10B2F3]">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-2xl">About</h4>
                                <Link to="/about" className="text-[#001E50] text-xs hover:text-[#10B2F3]">
                                    About Bookslab
                                </Link>
                                <Link to="/terms" className="text-[#001E50] text-xs hover:text-[#10B2F3]">
                                    Terms & Conditions
                                </Link>
                                <Link to="/uploads" className="text-[#001E50] text-xs hover:text-[#10B2F3]">
                                    Books upload policy
                                </Link>
                                <Link to="/policies" className="text-[#001E50] text-xs hover:text-[#10B2F3]">
                                    Privacy Policies
                                </Link>
                            </div>
                            <div>
                                <img src="src/assets/image.png"  className='mb-8' alt="footer logo" />
                                <span>Facebook</span>
                                <span>Facebook</span>
                                <span>Facebook</span>
                            </div>
                        </div>
                        {/* <div>
                            <p className="text-center">2023 BooksLab. All right reserved!</p>
                        </div> */}
                    </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
