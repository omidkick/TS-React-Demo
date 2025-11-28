// src/components/Input.tsx
import React from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, error, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`border p-2 rounded ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
