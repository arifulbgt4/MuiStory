import { Components } from "@mui/material/styles";
import Card from "./Card";
import Button from "./Button";
import TextField from "./TextField";
import FormControl from "./FormControl";
import Alert from "./Alert";

export default Object.assign(
  Button,
  Card,
  TextField,
  FormControl,
  Alert
) as Components<any>;
