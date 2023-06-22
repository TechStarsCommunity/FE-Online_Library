import React from "react";

// change the name of the function to match the name of the file
const Contact = () => {
    return (
        <React.Fragment>
            {/* Write Your Normal HTML Here */}
            <section class="py-10 px-4">
                <div class="container mx-auto flex flex-wrap">
                    <div class="mt-10 w-full md:w-1/2">
                        <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
                        <div class="flex items-center space-x-4 mb-4">
                            <img src="../assets/small.svg" alt="" class="w-6 h-6" />
                            <a href="techstarscommunity@gmail.com" class="text-blue-500">techstarscommunity@gmail.com</a>
                        </div>
                        <div class="flex items-center space-x-4 mb-4">
                            <img src="../assets/small.svg" alt="" class="w-6 h-6" />
                            <a href="tel:+00018494724745" class="text-blue-500">+000 184 947 24745</a>
                        </div>
                        <div class="flex items-center space-x-4 mb-4">
                            <img src="../assets/small.svg" alt="" class="w-6 h-6" />
                            <a href="#" class="text-blue-500">285 Office Address</a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <img src="../assets/small.svg" alt="" class="w-6 h-6" />
                            <img src="../assets/small.svg" alt="" class="w-6 h-6" />
                            <img src="../assets/small.svg" alt="" class="w-6 h-6" />
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <div class="mt-8">
                            <img src="../assets/big.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-10 px-4">
                <div class="container mx-auto flex flex-wrap">
                    <div class="w-full md:w-1/2">
                        <h1 class="text-4xl font-bold mb-6">Send us a message</h1>
                        <div>
                            <form action="">
                                <div class="mb-4">
                                    <label for="name" class="block mb-2">Name:</label>
                                    <input type="text" id="name" name="name" placeholder="Name" class="border border-gray-300 rounded-md py-2 px-4 w-3/4" />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block mb-2">Email:</label>
                                    <input type="text" id="email" name="email" placeholder="Email" class="border border-gray-300 rounded-md py-2 px-4 w-3/4" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <form action="">
                            <div class="mb-4">
                                <label for="message" class="block mb-2">Message:</label>
                                <textarea id="message" name="message" rows="10" placeholder="Message" class="border border-gray-300 rounded-md py-2 px-4 w-full"></textarea>
                            </div>
                            <button class="bg-blue-500 text-white py-2 px-4 rounded-md">Send</button>
                        </form>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
};

// Also change the name of the function here
export default Contact;