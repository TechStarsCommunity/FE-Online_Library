import Button from "./button";

const AboutComponent = () => {
    return (
        <div className="py-5 px-2 bg-[#dffcf4] font-serif m-0 w-full">
            <div className=" px-10">
                <h1 className="text-[24px] md:text-[30px] my-[20px] text-[#203A66] font-bold lg:text-[36px]">
                    About BooksLab
                </h1>

                <div className="text-[#727272] md:text-[14px] text-justify text-[12px] lg:text-[18px]">
                    <p className="my-[10px] md:my-[20px] lg:my-[30px]">
                        Welcome to BooksLab, your online resource library for books and articles.
                        Created by the Techstars community, we connect individuals worldwide with a
                        vast collection of verified books curated by experts. Our unique roadmap
                        feature guides you from beginner to advanced in your chosen tech field, with
                        regular updates to keep you up-to-date on the latest trends and
                        technologies.
                    </p>
                    <p className="my-[10px] md:my-[20px] lg:my-[30px]">
                        At BooksLab, we believe knowledge should be accessible to all. That's why
                        our platform is completely free and features user-generated resources that
                        undergo thorough verification by our expert community. As part of the
                        Techstars network, we benefit from a global community of tech enthusiasts,
                        developers, and mentors, allowing us to continually enhance your learning
                        experience.
                    </p>
                    <p className="my-[10px] md:my-[20px] lg:my-[30px]">
                        Choose BooksLab as your go-to platform for books and resources, and let us
                        help you achieve your learning goals. Join us on a knowledge-driven
                        adventure and thrive in the ever-evolving tech world.
                    </p>
                </div>
                <Button
                    children={"Read More"}
                    variant="primary"
                    style={{
                        maxWidth: "150px",
                        width: "8rem",
                        borderRadius: "25px",
                        fontSize: "13px",
                        height: "40px",
                    }}
                />
            </div>
        </div>
    );
};

export default AboutComponent;
