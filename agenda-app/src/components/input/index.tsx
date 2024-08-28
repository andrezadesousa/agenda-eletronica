import React from "react";
import "./index.css";

type InputTextProps = {
  title: string;
  placeholder: string;
  type: string;
  icon?: string;
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  title,
  placeholder,
  type,
  icon,
  value,
  onChange,
}: InputTextProps) => {
  return (
    <div className="form__field">
      <label htmlFor="email" className="form__label">
        {title}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        id={type}
        className="form__input"
        value={value}
        onChange={onChange}
      ></input>
      <i className={`form__icon ${icon}`}></i>
    </div>
  );
};
