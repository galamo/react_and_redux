import React, { useState, useCallback, useRef, useEffect } from "react";
import css from "./style.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export function SettingsPage() {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={2}
          label="Age"
          onChange={() => {}}
        >
          <MenuItem value={"MMMM Do YYYY, h:mm:ss a"}>Main format</MenuItem>
          <MenuItem value={"MMM Do YY"}>Secondary format</MenuItem>
          <MenuItem value={"dddd"}>other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
