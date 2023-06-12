import { Components } from "@mui/material/styles";
import Card from "./Card";
import Button from "./Button";
import TextField from "./TextField";
import FormControl from "./FormControl";
import Alert from "./Alert";
import Backdrop from "./Backdrop";
import Dialog from "./Dialog";
import Progress from "./Progress";
import Skeleton from "./Skeleton";
import Snackbar from "./Snackbar";
import Avatar from "./Avatar";
import Badge from "./Badge";
import Chip from "./Chip";
import Divider from "./Divider";

export default Object.assign(
  Button,
  Card,
  TextField,
  FormControl,
  Alert,
  Backdrop,
  Dialog,
  Progress,
  Skeleton,
  Snackbar,
  Avatar,
  Badge,
  Chip,
  Divider
) as Components<any>;
