import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css'

const FOOTER_LOGO = 'https://s3-alpha-sig.figma.com/img/dfa8/f436/60bda4ffec12dc122ee9e310de4bdbcb?Expires=1690761600&Signature=mn9RzOFqYFLosX5UEeEoyyULI8pP61FP-JjxvvBQY8IIp85rBpDBABrJpw3SlcEZbqr8x6bUXpcni3wBh7qVNimkW7xUtRjthj2KbvmAJqezEP2eXiAajfRxdWsQcWbrcmnVWSemGpKooI1edXHZC~WnvvkhBpWtP1Sdne4DP4fZDx8NmbR7JYjlgUML1TH-FPUjiPH7fktGBdd4mApHF6ro4986MPMP1~1tNOMoe5IUzVq8VPeL-jc9LhLuCV7w0o9t6blk--e5GFIwuAaWJqn2t2AT6Mv9teRsQhSmFBfEEgoKnInKyOwv9pWyeaoJzMw1ysaMbkTOIy2dm3HaNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="bg-[#dffcf4] flex flex-col gap-12 pt-[5rem] pb-6 pl-12 overflow-x-hidden">
                <div className="grid grid-cols-4">
                    <div className="h-[3rem] col-start-1 col-end-2">
                      <div className="mb-8">
                        <div className="footer_logo w-[200px]"><img  src={FOOTER_LOGO} alt="footer logo"/></div>
                        <p className="text-sm mt-4 font-medium"> Copyright 2023 BooksLab. All right reserved!</p>
                      </div>
                      <p className="text-[22px] font-semibold tracking-normal">Subscribe to our newsletter</p>
                      <div className="flex">
                        <input type="text" placeholder="Email address" />
                        {/* <span class="material-symbols-outlined">keyboard_arrow_right</span> */}
                        <img src='src/assets/arrow-right.png' alt="" />
                      </div>
                    </div>
                    <div className="col-end-6 col-span-3 grid grid-cols-3">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-[17px]">Navigation</h4>
                                <Link to="/categories" className="text-[#001E50] text-[15px] hover:text-[#10B2F3]">
                                    Top Categories
                                </Link>
                                <Link to="/road-map" className="text-[#001E50] text-[15px] hover:text-[#10B2F3]">
                                    Road Map
                                </Link>
                                <Link to="/about" className="text-[#001E50] text-[15px] hover:text-[#10B2F3]">
                                    About
                                </Link>
                                <Link to="/contact" className="text-[#001E50] text-[15px] hover:text-[#10B2F3]">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-[17px]">About</h4>
                                <Link to="/about" className="text-[#001E50] text-[15px] hover:text-[#10B2F3]">
                                    About Bookslab
                                </Link>
                                <Link to="/terms" className="text-[#001E50] text-[15px] hover:text-[#10B2F3]">
                                    Terms & Conditions
                                </Link>
                                <Link to="/uploads" className="text-[#001E50] text-[15px] hover:text-[#10B2F3]">
                                    Books upload policy
                                </Link>
                                <Link to="/policies" className="text-[#001E50] text-[15px] hover:text-[#10B2F3]">
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
