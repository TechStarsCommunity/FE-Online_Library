import { inputStyles } from "./uploadContents"

const SelectField = ({ label, error, value, onChange }) => (
    <div className="mb-4">
      <label htmlFor={label.toLowerCase()} className="text-base mb-0">
        {label}
      </label>
      <select
        id={label.toLowerCase()}
        name={label.toLowerCase()} // Add the name attribute
        className={inputStyles + " rounded-lg text-[grey]"}
        value={value}
        onChange={onChange}
      >
        <option value="" >
          --select {label.toLowerCase()}
        </option>
        <option value="Education">Education</option>
        <option value="Tech">Tech</option>
        <option value="Comedy">Comedy</option>
      </select>
      {error && (
        <p className="text-red-500 mt-9 text-sm">{error}</p>
      )}
    </div>
  );

  export default SelectField