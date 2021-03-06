import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {Link} from "react-router-dom";
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
      <Link to={`/item/${prod.id}`} className = {s.btnDetail} >Ver detalle </Link>
      </CardActions>
    </Card>
  );
}
