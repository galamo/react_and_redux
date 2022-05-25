import React, { ReactElement } from "react";
import Skeleton from "@mui/material/Skeleton";

interface ILoading {
  children: ReactElement;
  isLoading?: boolean;
  width?: number;
  height?: number;
}

export function WithLoading(props: ILoading): ReactElement {
  const { width = "100%", height = "100vh", isLoading: isLoadingProp } = props;
  const isLoading = isLoadingProp || false;
  return isLoading ? (
    <Skeleton variant="rectangular" width={width} height={height} />
  ) : (
    props.children
  );
}
