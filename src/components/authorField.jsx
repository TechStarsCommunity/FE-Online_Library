// --------Styles for input and button--------
const inputStyles =
    "px-4 py-2 max-h-1/2 h-auto w-full md:w-auto grow border-[#35EAB9] border focus:border-[#35EAB9] mb-[-2rem]";
const buttonStyles =
    "bg-gradient-to-r from-[#10B2F3] to-[#35EAB9] text-white md:p-[10px] p-2 rounded-lg mt-8 text-xs md:text-base";

const AuthorField = ({ isCredits, error, value, onChange }) => (
    <div>
        <label htmlFor={isCredits ? "credits" : "author"} className="text-base mb-[-2rem]">
            {isCredits ? "Credits" : "Authors name"}
        </label>
        <div className="flex gap-4 flex-row items-center h-auto">
            <input
                type="text"
                id={isCredits ? "credits" : "author"}
                name={isCredits ? "credits" : "author"}
                placeholder={isCredits ? "Author1" : "John Doe"}
                className={inputStyles + " w-3/5 mt-1"}
                value={value}
                onChange={onChange}
            />
            <div>
                <button className={buttonStyles}>
                    {isCredits ? "Add Author" : "Use profile name"}
                </button>
            </div>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
);

export default AuthorField;
