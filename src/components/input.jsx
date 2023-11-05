import React, { useState, memo } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = memo(
    ({ label, name, placeholder, type, register, errors, autoComplete, disabled, style, className, onChange, value, maxLength, ref}) => {
        const [inputType, setInputType] = useState(type);

        const toggleInputType = () => {
            setInputType("text");
            setTimeout(() => {
                setInputType("password");
            }, 3000);
        };

        return (
            <div className="flex flex-col gap-2 mb-4 md:mb-8">
                {label && (
                    <label
                        htmlFor={name}
                        className={`text-sm md:text-lg ${
                            disabled === true ? "text-red-600" : "text-[#001E50]"
                        }`}
                    >
                        {label}
                    </label>
                )}
                <div className="relative w-full">
                    <input
                        type={inputType}
                        id={name}
                        {...register(
                            name,
                            { required: true },
                            type === "password" && {
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                            },
                            type === "email" && {
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$/,
                                    message: "Invalid email address",
                                },
                            },
                        )}
                        aria-invalid={errors[name] ? "true" : "false"}
                        autoSave="true"
                        autoCorrect="on"
                        spellCheck={
                            name !== "password"
                                ? "true"
                                : name !== "confirmPassword"
                                ? "true"
                                : "false"
                        }
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        className={`input ${
                            disabled === true ? "cursor-not-allowed" : "cursor-text"
                        } ${className}`}
                        style={style}
                        onChange={onChange}
                        value={value}
                        maxLength={maxLength}
                        ref={ref}
                    />
                    {type === "password" && (
                        <span
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            onClick={toggleInputType}
                        >
                            {inputType === "password" ? (
                                <AiOutlineEyeInvisible className="text-2xl text-slate-500" />
                            ) : (
                                <AiOutlineEye className="text-2xl text-slate-500" />
                            )}
                        </span>
                    )}
                </div>
                {errors[name] && (
                    <span role="alert" className="text-sm text-red-700 capitalize">
                        {errors[name].message}
                    </span>
                )}
            </div>
        );
    },
);

Input.displayName = "Input";

export default Input;