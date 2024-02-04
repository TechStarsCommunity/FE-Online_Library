// --------Styles for input--------
const inputStyles =
    "px-4 py-2 max-h-1/2 h-auto w-full md:w-auto grow border-[#35EAB9] border focus:border-[#35EAB9] mb-[-2rem]";

const SelectField = ({ label, error, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={label} className="text-base mb-0">
            {label}
        </label>
        <select
            id={label}
            name={label}
            className={inputStyles + " rounded-lg text-[grey]"}
            value={value}
            onChange={onChange}
        >
            <option value="">--select {label.toLowerCase()}</option>
            <option value="Education">Education</option>
            <option value="Tech">Tech</option>
            <option value="Comedy">Comedy</option>
        </select>
        {error && <p className="text-red-500 mt-9 text-sm">{error}</p>}
    </div>
);

export default SelectField;
