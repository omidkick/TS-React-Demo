import React from "react";
import MiniLoading from "./MiniLoading";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "danger";
  loading?: boolean;
  loadingColor?: string;
  className?: string;
};

const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
} as const;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  loading = false,
  loadingColor = "#ffffff",
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <MiniLoading color={loadingColor} /> : children}
    </button>
  );
};

export default Button;
