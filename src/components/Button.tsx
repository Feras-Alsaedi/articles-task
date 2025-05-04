import React from "react";

interface IProps {
  text: string;
  onClick: () => void;
}
const Button = ({ text, onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {text}
    </button>
  );
};

export default Button;
