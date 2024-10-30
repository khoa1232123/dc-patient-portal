import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "normal" | "outline" | "none";
  className?: string;
  children: React.ReactNode;
};

const ButtonCustom = ({ variant = "normal", className = "",children, ...props }: Props) => {
  return (
    <button className={`base-btn ${className} ${variant}`} {...props}>
      <span>{children}</span>
    </button>
  );
};

export default ButtonCustom;
