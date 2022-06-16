import React, { useState, useCallback, useRef } from "react";
import css from "./style.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppDate from "../../app/appDate";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export function VacationsPage() {
  const [vacations, setVacations] = useState([
    "Ibiza",
    "Maldives",
    "Thailand",
    "Tira",
  ]);
  const [currentVacation, setCurrentVacation] = useState("");
  const inputValue = useRef<HTMLInputElement>(null)
  const addVacationHandler = useCallback((value: string | undefined) => {
    console.log("handler calc")
    if (!value) return;
    setVacations([...vacations, value]);
  }, [vacations]);

  return (
    <div className={css.center}>
      <Grid container style={{ marginTop: "30px" }}>
        <h1> Vacations </h1>
        <AppDate date={new Date().getTime()} />
      </Grid>

      <Grid container spacing={2}>
        <TextField
          inputRef={inputValue}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        // onChange={(e: any) => {
        //   setCurrentVacation(e.target.value);
        // }}
        />
        <Button onClick={() => { addVacationHandler(inputValue?.current?.value as any) }} variant="text">
          Add
        </Button>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Text only
          </Typography>
          <List dense={true}>
            {vacations.map((currentVacation, index) => {
              return (
                <ListItem>
                  <ListItemText primary={`Vacation_${index}`} />
                  {currentVacation}
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
