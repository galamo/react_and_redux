import React, { ReactElement } from "react";
import jsonFile from "./index.json";

// type example based on JSON
type MainHeaderType = typeof jsonFile;
const style: MainHeaderType = {
  style: {
    color: "blue",
  },
};

interface IMainHeader {
  text: string;
  color?: string;
  size?: string;
}

export function MainHeader(props: IMainHeader): ReactElement {
  const { text, color, size } = props;
  const defaultColor: string = "yellow";
  const defaultSize: string = "25px";
  return (
    <h1 style={{ color: color || defaultColor, fontSize: size || defaultSize }}>
      {text}
    </h1>
  );
}
