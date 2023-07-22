import React from "react"
import Button from "./button/button"
const AboutComponent= () => {
    return(
        <React.Fragment> 
            <div className="p-5 bg-[#dffcf4] lg:container lg:mx-auto">
            <h1 className="text-[24px] text-[#203A66] font-bold lg:text-[48px]">
                About BooksLab
            </h1>

            <div className="text-[#727272] text-justify text-[12px] font-normal lg:text-[24px]">

                <p>
                    Welcome to BooksLab, your online resource library for books and articles. Created by the Techstars community, we connect individuals worldwide with a vast collection of verified books curated by experts. 
                    Our unique roadmap feature guides you from beginner to advanced in your chosen tech field, with regular updates to keep you up-to-date on the latest trends and technologies.
                </p>
                <p>
                    At BooksLab, we believe knowledge should be accessible to all. That's why our platform is completely free and features user-generated resources that undergo thorough verification by our expert community. 
                    As part of the Techstars network, we benefit from a global community of tech enthusiasts, developers, and mentors, allowing us to continually enhance your learning experience.
                </p>
                <p>
                    Choose BooksLab as your go-to platform for books and resources, and let us help you achieve your learning goals. Join us on a knowledge-driven adventure and thrive in the ever-evolving tech world.
                </p>

            </div>
            <Button/>

            </div>
            
        </React.Fragment>
    )
}

export default AboutComponent