import React from "react";
import "./index.css";

type ButtonProps = {
  title: string;
};

export const Button = ({ title, ...props }: ButtonProps) => {
  return <button className="login__button">{title}</button>;
};
