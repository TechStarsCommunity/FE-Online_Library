import React from "react";

const Contact = () => {
    return (
        <React.Fragment>
            <section className="py-10 px-4">
                <div className="container mx-auto flex flex-wrap">
                    <div className="mt-10 w-full md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <img src="src/assets/small.svg" alt="" className="w-6 h-6" />
                            <a href="techstarscommunity@gmail.com" className="text-blue-500">techstarscommunity@gmail.com</a>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <img src="src/assets/small.svg" alt="" className="w-6 h-6" />
                            <a href="tel:+00018494724745" className="text-blue-500">+000 184 947 24745</a>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <img src="src/assets/small.svg" alt="" className="w-6 h-6" />
                            <a href="#" className="text-blue-500">285 Office Address</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="src/assets/small.svg" alt="" className="w-6 h-6" />
                            <img src="src/assets/small.svg" alt="" className="w-6 h-6" />
                            <img src="src/assets/small.svg" alt="" className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="mt-8">
                            <img src="src/assets/big.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 px-4">
                <div className="container mx-auto flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">Send us a message</h1>
                        <div>
                            <form action="">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block mb-2">Name:</label>
                                    <input type="text" id="name" name="name" placeholder="Name" className="border border-gray-300 rounded-md py-2 px-4 w-3/4" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-2">Email:</label>
                                    <input type="text" id="email" name="email" placeholder="Email" className="border border-gray-300 rounded-md py-2 px-4 w-3/4" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2">Message:</label>
                            <textarea id="message" name="message" rows="10" placeholder="Message" className="border border-gray-300 rounded-md py-2 px-4 w-full"></textarea>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Send</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Contact;