import React from "react"
import Button from "./button/button"
const AboutComponent= () => {
    return(
        <React.Fragment> 
            <div className="p-5 bg-[#dffcf4] my-[30px] font-serif">
                <div className="md:px-[50px] lg:max-w-screen-lg lg:mx-auto">
                    <h1 className="text-[24px] md:text-[30px] my-[20px] text-[#203A66] font-bold lg:text-[36px]">
                        About BooksLab
                    </h1>

                    <div className="text-[#727272] md:text-[16px] text-justify text-[12px] lg:text-[18px]">

                        <p className="my-[10px] md:my-[20px] lg:my-[30px]">
                            Welcome to BooksLab, your online resource library for books and articles. Created by the Techstars community, we connect individuals worldwide with a vast collection of verified books curated by experts. 
                            Our unique roadmap feature guides you from beginner to advanced in your chosen tech field, with regular updates to keep you up-to-date on the latest trends and technologies.
                        </p>
                        <p className="my-[10px] md:my-[20px] lg:my-[30px]">
                            At BooksLab, we believe knowledge should be accessible to all. That's why our platform is completely free and features user-generated resources that undergo thorough verification by our expert community. 
                            As part of the Techstars network, we benefit from a global community of tech enthusiasts, developers, and mentors, allowing us to continually enhance your learning experience.
                        </p>
                        <p className="my-[10px] md:my-[20px] lg:my-[30px]">
                            Choose BooksLab as your go-to platform for books and resources, and let us help you achieve your learning goals. Join us on a knowledge-driven adventure and thrive in the ever-evolving tech world.
                        </p>

                    </div>
                    <Button>Read More</Button>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default AboutComponent