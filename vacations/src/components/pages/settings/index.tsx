import React, { useState, useCallback, useRef, useEffect } from "react";
import css from "./style.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setDateFormat, setUtc } from "../../../store/reducers/settingsSlice";

export function SettingsPage() {
  const dispatch = useAppDispatch();
  const { dateFormat, isUtc } = useAppSelector((state) => state.settings);
  return (
    <div style={{ margin: "auto", width: "500px", marginTop: "10px" }}>
      {dateFormat}
      <FormControl fullWidth style={{ marginTop: "2rem" }}>
        <InputLabel id="demo-simple-select-label">Date format</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dateFormat}
          label="Date format"
          onChange={(event: any) => {
            dispatch(setDateFormat(event.target.value));
          }}
        >
          <MenuItem value={"MMMM Do YYYY, h:mm:ss a"}>Main format</MenuItem>
          <MenuItem value={"MMM Do YY"}>Secondary format</MenuItem>
          <MenuItem value={"dddd"}>other</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth style={{ marginTop: "2rem" }}>
        <InputLabel id="demo-simple-select-label">UTC</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={isUtc.toString()}
          label="Utc"
          onChange={(event: any) => {
            const isTrue = event.target.value === "true";
            dispatch(setUtc(isTrue));
          }}
        >
          <MenuItem value={"true"}>true</MenuItem>
          <MenuItem value={"false"}>false</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
