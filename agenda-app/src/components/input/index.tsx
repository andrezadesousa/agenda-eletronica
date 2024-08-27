import React from "react";
import "./index.css";

type InputTextProps = {
  title: string;
  placeholder: string;
  type: string;
};

export const Input = ({ title, placeholder, type }: InputTextProps) => {
  return (
    <div className="container">
      <h1 className="title__input">{title}</h1>
      <input className="input" type={type} placeholder={placeholder}></input>
    </div>
  );
};
