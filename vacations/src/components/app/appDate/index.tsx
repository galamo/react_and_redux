import React from "react";
import { useContext } from "react";
import { DateContext } from "../../../App";

interface IAppdate {
  date: number;
}

export default function AppDate(props: IAppdate) {
  const { date } = props;
  const dateContextIsUtc = useContext(DateContext);
  const currentDate = dateContextIsUtc
    ? new Date(date).toISOString()
    : new Date(date).toString();
  return <span>{currentDate}</span>;
}
