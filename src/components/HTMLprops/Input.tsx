import type { ComponentProps } from "react";

const Input = ({ className, ...rest }: ComponentProps<"input">) => {
  return (
    <input
      className={`
        
        border border-purple-700 
        rounded-md 
        px-3 py-2 
        focus:outline-none 
        focus:ring-2 
        focus:ring-purple-500 
        transition-all 
        duration-300
        ${className}
      `}
      {...rest}
    />
  );
};

export default Input;
