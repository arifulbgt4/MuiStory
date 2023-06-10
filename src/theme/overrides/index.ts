import { Components } from "@mui/material/styles";
import Card from "./Card";
import Button from "./Button";
import TextField from "./TextField";

export default Object.assign(Button, Card, TextField) as Components<any>;
