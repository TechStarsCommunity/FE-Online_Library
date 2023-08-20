import React from "react";
import ContactComponent from "../components/contact";
import Header from "../components/header";
import Footer from "../components/footer";

const Contact = () => {
    return (
        <React.Fragment>
            <Header />

            <section className="py-10 px-4">
                <div className="container mx-auto flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">Send us a message</h1>
                        <div>
                            <form action="">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block mb-2">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        className="border border-gray-300 rounded-md py-2 px-4 w-3/4"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-2">
                                        Email:
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="border border-gray-300 rounded-md py-2 px-4 w-3/4"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <form action="">
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2">
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={10}
                                    placeholder="Message"
                                    className="border border-gray-300 rounded-md py-2 px-4 w-full"
                                ></textarea>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Contact;
