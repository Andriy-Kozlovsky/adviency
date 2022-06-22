import React from "react";

const Button = ({primary, children}: {primary: boolean; children: React.ReactNode}) => {
  return (
    <button
      className={`${
        primary
          ? "bg-red-700 text-white hover:bg-red-600"
          : "bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-gray-700"
      } py-0.5 px-4 rounded-sm tracking-wide`}
    >
      {children}
    </button>
  );
};

export default Button;
