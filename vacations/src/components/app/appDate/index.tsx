import moment from "moment";
import React from "react";
import { useContext } from "react";
import { ACTIONS, DateContext } from "../../../App";

interface IAppdate {
  date: number;
}

export default function AppDate(props: IAppdate) {
  const { date } = props;
  const {
    isUtc: dateContextIsUtc,
    dateFormat,
    dispatch,
  } = useContext(DateContext);
  const currentDate = dateContextIsUtc
    ? moment(date).utc().format(dateFormat)
    : moment(date).format(dateFormat);
  return (
    <span
      onDoubleClick={() => {
        typeof dispatch === "function" && dispatch({ type: ACTIONS.SET_UTC });
      }}
    >
      {currentDate}
    </span>
  );
}
