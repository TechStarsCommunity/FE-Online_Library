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
            <Header />
            <ContactComponent className={"bg-[#dffcf4]"} />
            <section className="mx-auto w-full py-[24px] px-[48px]">
                <h1 className="text-[24px] md:text-[30px] my-[20px] text-[#001E50] font-bold lg:text-[36px]">
                    Send us a message
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-flow-row-dense grid-cols-2 gap-2 my-12"
                >
                    <div className="col-span-1 mr-auto w-[90%]">
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
                    <div className="col-span-1 flex flex-col gap-2 ml-auto w-[90%]">
                        <label htmlFor="message" className="text-sm md:text-lg text-[#001E50]">
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
                            <span role="alert" className="text-sm text-red-700 capitalize">
                                {errors.message.message}
                            </span>
                        )}
                    </div>
                    <Button variant="primary" style={{ width: "15rem", marginTop: "-5rem" }}>
                        Submit
                    </Button>
                </form>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Contact;
