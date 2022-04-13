import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import s from "./Item.module.css";

export default function Item({ prod }) {
  return (
    <Card sx={{ maxWidth: 345 }} className={s.cardContent}>
      <CardContent>
        <img src={prod.image} alt={prod.name} />
        <Typography gutterBottom variant="h5" component="div">
          {prod.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${prod.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prod.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prod.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={s.btn} >Ver detalle</Button>
      </CardActions>
    </Card>
  );
}
