import { LoginSchema } from "../config/schema";
import useSubmit from "../hooks/useSubmit";
import loginLogo from "/booksLab_logo.png";
import Button from "../components/button";
import Input from "../components/input";

const Login = () => {
    const { errors, register, handleSubmit } = useSubmit(LoginSchema);

    const onLogin = (data) => {
        console.log(data);
    };

    return (
        <main className="main bg-white flex gap-12 py-8 px-4 md:py-0 md:px-0">
            <section className="w-[98%] md:w-[60%] m-auto full md:h-3/4">
                <form
                    onSubmit={handleSubmit(onLogin)}
                    className="flex flex-col items-center justify-center sm:pl-6"
                >
                    <div className="w-full max-w-[30rem] grid grid-cols-1 gap-4 mb-6 md:mb-12">
                        <h1 className="text-sky-950 md:text-4xl text-2xl font-semibold">
                            Welcome Back
                        </h1>
                        <p className="text-black text-sm md:text-base font-normal">
                            Sign in to continue
                        </p>
                    </div>
                    <div className="w-full max-w-[30rem] grid grid-cols-1 gap-4">
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            register={register}
                            errors={errors}
                            autoComplete="email"
                            placeholder="Email..."
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            register={register}
                            errors={errors}
                            placeholder="Password..."
                        />
                    </div>
                    <Button
                        borderVariant="noRadius"
                        variant="primary"
                        type="submit"
                        className="w-full mt-6 max-w-[30rem]"
                    >
                        Login
                    </Button>
                    <div className="w-full max-w-[30rem] grid grid-cols-1 gap-4">
                        <h5 className="text-sm lg:text-xl font-medium">
                            Don{`'`}t have an Account?{" "}
                            <a className="text-sky-950 text-sm lg:text-xl font-bold" href="/signup">
                                Sign Up
                            </a>
                        </h5>
                        <Button
                            borderVariant="noRadius"
                            variant="primary"
                            className="w-full mt-8 md:mt-12 max-w-[30rem]"
                        >
                            Login as Admin
                        </Button>
                    </div>
                </form>
            </section>

            <div className="hidden md:grid place-items-center h-screen bg-cover bg-center bg-[url('/loginImage.svg')] rounded-tl-3xl rounded-bl-3xl max-w-[20rem] lg:max-w-[30rem] w-full">
                <img
                    src={loginLogo}
                    alt="logo"
                    className="w-full max-w-[10rem] lg:max-w-[15rem] h-10"
                />
            </div>
        </main>
    );
};

export default Login;
