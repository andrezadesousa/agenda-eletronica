import React from "react";
import "./index.css";

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return <h1 className="title">{title}</h1>;
};
