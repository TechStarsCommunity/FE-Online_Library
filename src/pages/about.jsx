import React from "react";
import "../styles/about.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { productManagers } from "../data/teamMembers/productManagers";
import { teamDesigners } from "../data/teamMembers/designTeam";
import { teamFrontend } from "../data/teamMembers/frontendTeam";
import { teamBackend } from "../data/teamMembers/backendTeam";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AboutpageCard from "../components/aboutpageCard";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4.5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const About = () => {
    // const dynamicBgColor = "#dffcf4";

    return (
        <React.Fragment>
            <Header />

            <div className="page">
                <h1> About BooksLab</h1>
                <p className="lor">
                    Welcome to BooksLab, an online resource library that is dedicated to providing
                    individuals from around the world with access to books and articles.
                </p>
                <p className="lor">
                    Bookslab was created by the TechStars community with the goal of bringing
                    together a community of learners who are passionate about what they do and are
                    looking for ways to expand their knowledge base. Our platform offers users the
                    opportunity to access an extensive collection of books that have been verified
                    by our team of experts. We understand that learning is a continuous process, and
                    we strive to make it easier for individuals to access the information they need
                    to improve their knowledge and skills.
                </p>
                <p className="lor">
                    Apart from the access to Books from various aspect of life, one of the unique
                    features of BooksLab is the roadmap feature. Our Roadmap is designed to guide
                    users from being a beginner to advanced in their chosen tech field. Whether
                    you're interested in web development, data science, cybersecurity, or any other
                    tech field, our Roadmap will help you develop a clear path to success. Our
                    Roadmap is regularly updated with the latest trends and technologies, ensuring
                    that users have access to the most up-to-date information.
                </p>
                <p className="lor">
                    At BooksLab, we believe that knowledge should be accessible to everyone,
                    regardless of their location or financial situation. This is why our platform is
                    completely free to use, and all of our resources are user-generated. Our
                    community of experts maintain the quality of our resources by verifying the
                    content that is uploaded to the platform. This ensures that our users have
                    access to only the best and most relevant resources.
                </p>
                <p className="lor">
                    BooksLab is proud to be a part of the TechStars community. TechStars is a global
                    community of tech enthusiasts, developers, designers, entrepreneurs, and mentors
                    who are dedicated to supporting the growth of our members. As a member of the
                    TechStars community, we have access to a wealth of resources and expertise that
                    has helped us to grow and develop our platform. We are grateful for the support
                    of the TechStars community and look forward to continuing to grow and expand our
                    platform with their hep.
                </p>
                <p className="lor">
                    In the future, BooksLab plan to introduce new features, including and audio
                    reader and AI assistant that will help users navigate our Roadmap more easily.
                    We are committed to providing our users with the best possible experience and
                    will continue to innovate and improve our platform to meet their needs.
                </p>
                <p className="lor">
                    Thank you for choosing BooksLab as you go-to platform for books and resources.
                    We look forward to help you achieve your learning goals and supporting you in
                    your journey to success.
                </p>

                <div>
                    <h1 className="team-title">Team</h1>
                </div>

                <h2>Product Manager</h2>
                <Carousel responsive={responsive}>
                    {productManagers.map((members) => (
                        <AboutpageCard
                            name={members.name}
                            title={members.title}
                            image={members.image}
                        />
                    ))}
                </Carousel>

                <h2>Product Designers</h2>
                <Carousel responsive={responsive}>
                    {teamDesigners.map((members) => (
                        <AboutpageCard
                            name={members.name}
                            title={members.title}
                            image={members.image}
                        />
                    ))}
                </Carousel>

                <h2 className="stack">Frontend Developers</h2>
                    <Carousel responsive={responsive}>
                        {teamFrontend.map((members) => (
                            <AboutpageCard
                                name={members.name}
                                title={members.title}
                                image={members.image}
                            />
                        ))}
                    </Carousel>
                

                <h2>Backend Developers</h2>
                <Carousel responsive={responsive}>
                    {teamBackend.map((members) => (
                        <AboutpageCard
                            name={members.name}
                            title={members.title}
                            image={members.image}
                        />
                    ))}
                </Carousel>
            </div>
            <Footer bgColor={"#dffcf4"} />
        </React.Fragment>
    );
};

export default About;
