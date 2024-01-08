import { useState, memo } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = memo(
    ({
        label,
        name,
        placeholder,
        type,
        register,
        errors,
        autoComplete,
        disabled,
        style,
        maxWidth,
        conWidth,
        conMargin,
    }) => {
        const [inputType, setInputType] = useState(type);

        const toggleInputType = () => {
            setInputType("text");
            setTimeout(() => {
                setInputType("password");
            }, 3000);
        };

        return (
            <div className="flex flex-col" style={{ width: conWidth, margin: conMargin }}>
                {label && (
                    <label
                        htmlFor={name}
                        className={`text-sm md:text-lg mb-0 ${
                            disabled === true ? "text-red-600" : "text-slate-800"
                        }`}
                    >
                        {label}
                    </label>
                )}
                <div className="relative w-full" style={{ maxWidth: maxWidth }}>
                    <input
                        type={inputType}
                        id={name}
                        {...register(name, { required: true })}
                        aria-invalid={errors[name] ? "true" : "false"}
                        autoSave="true"
                        autoCorrect="on"
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        className={`input ${
                            disabled === true ? "cursor-not-allowed" : "cursor-text"
                        }`}
                        style={style}
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
