import React from "react";
import "./index.css";

type InputTextProps = {
  title: string;
  placeholder: string;
  type: string;
  icon?: string;
};

export const Input = ({ title, placeholder, type, icon }: InputTextProps) => {
  return (
    <form action="" className="form" id="form">
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
        ></input>
        <i className={`form__icon ${icon}`}></i>
      </div>
    </form>
  );
};
