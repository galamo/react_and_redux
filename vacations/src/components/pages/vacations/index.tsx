import React, { useState, useCallback, useRef, useEffect } from "react";
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
  const [stateColor, setStateColor] = useState("red");
  const [currentVacation, setCurrentVacation] = useState("");
  const inputRefValue = useRef<HTMLInputElement>(null);
  const linkElement = useRef<HTMLAnchorElement>(null);
  const addVacationHandler = useCallback(
    (value: string | undefined) => {
      if (!value) return;
      setVacations((vacations) => {
        return [...vacations, value as string];
      });
    },
    [vacations]
  );

  useEffect(() => {
    // @ts-ignore
    linkElement.current.innerText = "Google";
    // @ts-ignore
    linkElement.current.href = "https://www.google.com";
    // @ts-ignore
    linkElement.current.id = "karam";
  }, []);

  
  return (
    <div className={css.center}>
      <Grid container style={{ marginTop: "30px" }}>
        <h1>
          Vacations <a ref={linkElement}> </a>
        </h1>
        <AppDate date={new Date().getTime()} />
      </Grid>

      <Grid container spacing={2}>
        <TextField
          inputRef={inputRefValue}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button
          onClick={() => {
            // console.log(inputRefValue.current?.value);
            addVacationHandler(inputRefValue.current?.value);
          }}
          variant="text"
        >
          Add
        </Button>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            style={{ color: stateColor }}
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            onDoubleClick={() => {
              const newColor = `rgba(${Math.ceil(
                Math.random() * 250
              )},${Math.ceil(Math.random() * 250)},${Math.ceil(
                Math.random() * 250
              )},${Math.random()})`;
              setStateColor(newColor);
              setStateColor((currentColor) => {
                const newColor = currentColor.replace("a", "");
                const arr = newColor.split(",");
                arr.splice(arr.length - 1, 1);
                const color = arr.join() + ")";
                return color;
              });
              console.log(`current State before update ${newColor}`);
            }}
          >
            List of Vacations
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
