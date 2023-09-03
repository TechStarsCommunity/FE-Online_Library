import React from "react";
import ContactComponent from "../components/contact";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/button";
import "../styles/form.css";

const Contact = () => { 
    return (
        <React.Fragment>
            <Header />
            <ContactComponent className={"bg-[#dffcf4]"}/>
             <section className="wrapper py-[24px] px-[48px]">
                    <div className="flex-container w-full">
                        <form>
                            <h1 className="text-[24px] md:text-[30px] my-[20px] text-[#001E50] font-bold lg:text-[36px]">Send us a message</h1>
                            <div className="input-container">
                                <label htmlFor="name" className="block mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    className="border border-gray-300 rounded-md py-2 px-4 w-full mb-8"
                                />
                           </div>
                           <div className="input-container">
                               <label htmlFor="email" className="block mb-2">
                                   Email
                               </label>
                               <input
                                   type="text"
                                   id="email"
                                   name="email"
                                   placeholder="Email"
                                   className="border border-gray-300 rounded-md py-2 px-4 w-full mb-8"
                               />
                           </div>
                           <Button variant="primary">Submit</Button>
                       </form>
                      <div className="textarea-container">
                          <textarea
                              id="message"
                              name="message"
                              placeholder="Enter message"
                              className="border border-gray-300 rounded-md py-2 px-4 w-full"
                              rows="10"
                          >
                          </textarea>
                </div>
             </div>
          </section>
          <Footer />
        </React.Fragment>
    );
};

export default Contact;
