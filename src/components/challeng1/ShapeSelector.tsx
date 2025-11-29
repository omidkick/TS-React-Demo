import React, { useState } from "react";
import Draw from "./Draw";

type Shape = "circle" | "square" | "rectangle";

const ShapeSelector: React.FC = () => {
  const [shape, setShape] = useState<Shape>("circle");

  // Default props for each shape
  const defaultProps = {
    circle: { radius: 50 },
    square: { baseWidth: 80 },
    rectangle: { width: 120, height: 60 },
  };

  return (
    <div className="w-3xl flex items-center justify-center mx-auto border border-gray-500 p-8">
      <div className=" flex flex-col md:flex-row items-center justify-between w-full">
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value as Shape)}
          className="bg-primary text-white p-2 text-2xl font-extrabold"
        >
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
        </select>
 
        <div className="mt-10 md:mt-0">
          {shape === "circle" && (
            <Draw shape="circle" {...defaultProps.circle} />
          )}
          {shape === "square" && (
            <Draw shape="square" {...defaultProps.square} />
          )}
          {shape === "rectangle" && (
            <Draw shape="rectangle" {...defaultProps.rectangle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShapeSelector;
