import type { ComponentProps } from "react";
import { useState } from "react";

const Button = ({ className, children, ...rest }: ComponentProps<"button">) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPressed(true);
    setTimeout(() => setPressed(false), 150); 

    if (rest.onClick) rest.onClick(e);
  };

  return (
    <button
      className={`
        border border-purple-700 
        rounded-md 
        p-2 
        transition-all 
        duration-150 
        ${pressed ? "scale-95" : "scale-100"} 
        ${className}
      `}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
