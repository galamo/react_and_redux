import moment from "moment";
import React, { useContext } from "react";
import { ACTIONS, DateContext } from "../../../App";
import { useAppSelector } from "../../../store/hooks";

interface IAppdate {
  date: number;
}

export default function AppDate(props: IAppdate) {
  const dateFormat = useAppSelector((state) => state.settings.dateFormat);
  const { date } = props;
  const {
    isUtc: dateContextIsUtc,

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
