import React from "react";
import "./index.css";

type FormProps = {
  children: React.ReactNode;
  id: string;
};
export const Form = ({ children, id }: FormProps) => {
  return (
    <form action="" className="form" id={id}>
      {children}
    </form>
  );
};
