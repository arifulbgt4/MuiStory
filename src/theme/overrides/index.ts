import { Components } from "@mui/material/styles";
import Card from "./Card";
import Button from "./Button";
import TextField from "./TextField";
import FormControl from "./FormControl";

export default Object.assign(
  Button,
  Card,
  TextField,
  FormControl
) as Components<any>;
