import React from "react";

type ButtonProps =
  | { variant: "primary"; onClick: () => void; children: string }
  | { variant: "secondary"; onClick: () => void; children: string }
  | { variant: "link"; href: string; children: string };

const Button: React.FC<ButtonProps> = (props) => {
  switch (props.variant) {
    case "primary":
      return (
        <button onClick={props.onClick} className="btn btn--primary">
          {props.children}
        </button>
      );

    case "secondary":
      return (
        <button onClick={props.onClick} className="btn btn--secondary">
          {props.children}
        </button>
      );

    case "link":
      return (
        <a href={props.href} className="btn btn--link">
          {props.children}
        </a>
      );

    default:
      return null;
  }
};

export default Button;
