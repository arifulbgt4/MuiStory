import { Components } from "@mui/material/styles";
import Card from "./Card";
import Button from "./Button";
import TextField from "./TextField";
import FormControl from "./FormControl";
import Alert from "./Alert";
import Backdrop from "./Backdrop";
import Dialog from "./Dialog";
import Progress from "./Progress";

export default Object.assign(
  Button,
  Card,
  TextField,
  FormControl,
  Alert,
  Backdrop,
  Dialog,
  Progress
) as Components<any>;
