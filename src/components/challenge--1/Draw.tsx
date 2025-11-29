import React from "react";

type DrawProps =
  | { shape: "circle"; radius: number }
  | { shape: "square"; baseWidth: number }
  | { shape: "rectangle"; width: number; height: number };

const Draw = (props: DrawProps) => {
  const style: React.CSSProperties = {};

  if (props.shape === "circle") {
    style.width = props.radius * 2;
    style.height = props.radius * 2;
    style.borderRadius = "50%";
    style.backgroundColor = "blue";
  } else if (props.shape === "square") {
    style.width = props.baseWidth;
    style.height = props.baseWidth;
    style.backgroundColor = "green";
  } else if (props.shape === "rectangle") {
    style.width = props.width;
    style.height = props.height;
    style.backgroundColor = "red";
  }

  return <div style={style}></div>;
};

export default Draw;
