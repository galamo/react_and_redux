import React, { ReactElement } from "react";
import Chip from "@mui/material/Chip";

interface ILanguagesChips {
  languages?: Array<string>;
}

export function LanguagesChips(props: ILanguagesChips): any {
  if (!Array.isArray(props.languages)) return;
  return props.languages.map((language: string) => {
    return <Chip label={language || "Not availble"} variant="outlined" />;
  });
}
