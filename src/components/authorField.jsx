import { inputStyles, buttonStyles } from "./uploadContents";

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
