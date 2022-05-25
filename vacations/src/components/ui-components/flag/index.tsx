import React, { ReactElement } from "react";

interface IFlag {
  imageSrc?: string;
}

export function Flag(props: IFlag): ReactElement {
  const defaultImage =
    "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";
  return (
    <img width={150} height={150} src={props.imageSrc || defaultImage} alt="" />
  );
}
