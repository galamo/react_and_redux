import moment from "moment";
import React from "react";
import { useContext } from "react";
import { DateContext } from "../../../App";

interface IAppdate {
  date: number;
}

export default function AppDate(props: IAppdate) {
  const { date } = props;
  const {
    isUtc: dateContextIsUtc,
    dateFormat,
    setisUtc,
  } = useContext(DateContext);
  const currentDate = dateContextIsUtc
    ? moment(date).utc().format(dateFormat)
    : moment(date).format(dateFormat);
  return (
    <span
      onDoubleClick={() => {
        typeof setisUtc === "function" && setisUtc(!dateContextIsUtc);
      }}
    >
      {currentDate}
    </span>
  );
}
