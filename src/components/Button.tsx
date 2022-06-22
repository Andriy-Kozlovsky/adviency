import React from "react";

const Button = ({primary, children}: {primary: boolean; children: React.ReactNode}) => {
  return <button>{children}</button>;
};

export default Button;
