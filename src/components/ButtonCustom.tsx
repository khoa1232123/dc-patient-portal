import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "normal" | "outline" | "none";
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const ButtonCustom = ({ variant = "normal", className = "", icon, children, ...props }: Props) => {
  return (
    <button className={`base-btn ${className} ${variant}`} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default ButtonCustom;
