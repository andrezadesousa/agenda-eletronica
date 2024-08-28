import React from "react";
import "./index.css";

type PinkButtonProps = {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const PinkButton = ({ title, onClick, ...props }: PinkButtonProps) => {
  return (
    <button type="submit" onClick={onClick} className="pink__button">
      {title}
    </button>
  );
};
