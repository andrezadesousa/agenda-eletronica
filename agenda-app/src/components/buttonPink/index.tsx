import React from "react";
import "./index.css";

type ButtonProps = {
  title: string;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
};

export const ButtonPink = ({ title, onSubmit, ...props }: ButtonProps) => {
  return (
    <button onSubmit={onSubmit} className="button__pink">
      {title}
    </button>
  );
};
