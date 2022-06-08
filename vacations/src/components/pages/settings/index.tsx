import React, { useState, useCallback, useRef, useEffect } from "react";
import css from "./style.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useDispatch } from "react-redux";
// import { setDateFormat } from "../../../store/reducers/settingsSlice";

export function SettingsPage() {
  const [format, setFormat] = useState("MMMM Do YYYY, h:mm:ss a");
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "auto", width: "500px", marginTop: "10px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={format}
          label="Age"
          onChange={(event: any) => {
            // dispatch(setDateFormat(event.target.value));
          }}
        >
          <MenuItem value={"MMMM Do YYYY, h:mm:ss a"}>Main format</MenuItem>
          <MenuItem value={"MMM Do YY"}>Secondary format</MenuItem>
          <MenuItem value={"dddd"}>other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
