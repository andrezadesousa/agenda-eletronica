import React from "react";
import "./index.css";

type PinkButtonProps = {
  title: string;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
};

export const PinkButton = ({ title, onSubmit, ...props }: PinkButtonProps) => {
  return (
    <button type="submit" onSubmit={onSubmit} className="pink__button">
      {title}
    </button>
  );
};
