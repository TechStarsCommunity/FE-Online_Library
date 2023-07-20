import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import tech from "../assets/tech.png"

const TopCategories = () => {
    return (
        <div className="bg-[#35EAB9] w-full px-10 py-5 categriesHeader" >
            <h2 className="">
                Top Categories
            </h2>
            <div className="w-full flex items-center pt-3 overflow-x-auto gap-8">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className="categoriesCard grid gap-2" >
                        <figure>
                            <img src={tech} alt="" />
                        </figure>
                        <figcaption>
                            <h3>Tech</h3>
                            <p>
                                All distributions of tech books
                            </p>
                        </figcaption>
                    </div>
                    <div className="categoriesCard grid gap-2" >
                        <figure>
                            <img src={tech} alt="" />
                        </figure>
                        <figcaption>
                            <h3>Tech</h3>
                            <p>
                                All distributions of tech books
                            </p>
                        </figcaption>
                    </div>
                    <div className="categoriesCard grid gap-2" >
                        <figure>
                            <img src={tech} alt="" />
                        </figure>
                        <figcaption>
                            <h3>Tech</h3>
                            <p>
                                All distributions of tech books
                            </p>
                        </figcaption>
                    </div>
                </Swiper>
                {/* <div className="categoriesCard grid gap-2" >
                    <figure>
                        <img src={tech} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Tech</h3>
                        <p>
                            All distributions of tech books
                        </p>
                    </figcaption>
                </div>
                <div className="categoriesCard grid gap-2" >
                    <figure>
                        <img src={tech} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Tech</h3>
                        <p>
                            All distributions of tech books
                        </p>
                    </figcaption>
                </div>
                <div className="categoriesCard grid gap-2" >
                    <figure>
                        <img src={tech} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Tech</h3>
                        <p>
                            All distributions of tech books
                        </p>
                    </figcaption>
                </div> */}
            </div>
        </div>
    )
}

export default TopCategories