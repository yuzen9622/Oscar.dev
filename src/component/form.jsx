import React from "react";

function Form({
  type,
  label,
  onChange,
  important = "",
  value = "",
  errorText = null,
}) {
  return (
    <>
      <div className="form ">
        {errorText && (
          <div className="error">
            <p>**{errorText}</p>
          </div>
        )}
        <input
          type={type}
          id={label}
          value={value}
          onChange={(e) => onChange(e)}
          required={important === "true" && true}
        />
        <label className={important} htmlFor={label}>
          {label}
        </label>
      </div>
    </>
  );
}

export default Form;
