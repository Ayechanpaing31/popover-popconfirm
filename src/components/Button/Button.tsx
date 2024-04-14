import React from "react";

type Props = {
  label: string;
};

const Button = ({ label }: Props) => {
  return <button className="bg-red-700 p-4 mx-2 rounded-lg">{label}</button>;
};

export default Button;
