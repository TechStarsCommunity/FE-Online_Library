import { inputStyles } from "./uploadContents"
    
const FormField = ({ label, placeholder, value, onChange, error }) => (
    <div className="mb-4">
      <label htmlFor={label.toLowerCase()} className="text-base mb-0">
        {label}
      </label>
      <input
        type="text"
        id={label.toLowerCase()}
        placeholder={placeholder}
        className={inputStyles}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 mt-9 text-sm">{error}</p>}
    </div>
  );

  export default FormField