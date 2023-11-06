import React from "react";
import ContactComponent from "../components/contact";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/button";
import Input from "../components/input";
import { ContactSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";

const Contact = () => {
    const { errors, register, handleSubmit } = useSubmit(ContactSchema);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <Header className="p-4" />
            <ContactComponent className="bg-[#dffcf4]" />
            <section className="mx-auto p-4 md:p-12 lg:p-24">
                <h1 className="text-2xl md:text-3xl lg:text-4xl my-4 text-[#001E50] font-bold ml-4">
                    Send us a message
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-4 grid grid-cols-1 md:grid-cols-2 gap-4 my-4 md:my-0"
                    id="contact-form"
                >
                    <div className="w-full">
                        <Input
                            label="Name"
                            name="name"
                            type="text"
                            register={register}
                            errors={errors}
                            autoComplete="name"
                            placeholder="Name..."
                        />
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            register={register}
                            errors={errors}
                            autoComplete="email"
                            placeholder="Email..."
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="message" className="text-base md:text-lg text-[#001E50]">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Enter message"
                            className="input"
                            rows={10}
                            {...register("message")}
                            {...(errors.message && { style: { border: "1px solid red" } })}
                        ></textarea>
                        {errors.message && (
                            <span role="alert" className="text-base text-red-700 capitalize">
                                {errors.message.message}
                            </span>
                        )}
                    </div>
                    <Button variant="primary" className="w-full">
                        Submit
                    </Button>
                </form>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Contact;
