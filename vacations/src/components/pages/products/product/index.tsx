import react from "React";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export interface IProduct {
  brand: string;
  category: string;
  description: string;
  id: number;
  price: number;
  title: string;
  thumbnail: string;
}

export default function Product(props: IProduct) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.thumbnail} />
        </ListItemAvatar>
        <ListItemText
          primary={`${props.title}  ${props.price}$`}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.category}
              </Typography>
              {props.description}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
