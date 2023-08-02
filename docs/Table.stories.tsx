import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { argProps, overView } from "./utils/formatArgs";
import css from "styled-jsx/css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TableContainer> = {
  title: "DATA DISPLAY/Table",
  component: TableContainer,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Table",
          description:
            "Tables display sets of data. They can be fully customized.",
          components: [
            {
              component: "Table",
              selector: "MuiTable",
              props: "https://mui.com/material-ui/api/table/#props",
              css: "https://mui.com/material-ui/api/table/#css",
            },
            {
              component: "TableBody",
              selector: "MuiTableBody",
              props: "https://mui.com/material-ui/api/table-body/#props",
              css: "https://mui.com/material-ui/api/table-body/#css",
            },
            {
              component: "TableCell",
              selector: "MuiTableCell",
              props: "https://mui.com/material-ui/api/table-cell/#props",
              css: "https://mui.com/material-ui/api/table-cell/#css",
            },
            {
              component: "TableContainer",
              selector: "MuiTableContainer",
              props: "https://mui.com/material-ui/api/table-container/#props",
              css: "https://mui.com/material-ui/api/table-container/#css",
            },
            {
              component: "TableFooter",
              selector: "MuiTableFooter",
              props: "https://mui.com/material-ui/api/table-footer/#props",
              css: "https://mui.com/material-ui/api/table-footer/#css",
            },
            {
              component: "TableHead",
              selector: "MuiTableHead",
              props: "https://mui.com/material-ui/api/table-head/#props",
              css: "https://mui.com/material-ui/api/table-head/#css",
            },
            {
              component: "TablePagination",
              selector: "MuiTablePagination",
              props: "https://mui.com/material-ui/api/table-pagination/#props",
              css: "https://mui.com/material-ui/api/table-pagination/#css",
            },
            {
              component: "TableRow",
              selector: "MuiTableRow",
              props: "https://mui.com/material-ui/api/table-row/#props",
              css: "https://mui.com/material-ui/api/table-row/#css",
            },
            {
              component: "TableSortLabel",
              selector: "MuiTableSortLabel",
              props: "https://mui.com/material-ui/api/table-sort-label/#props",
              css: "https://mui.com/material-ui/api/table-sort-label/#css",
            },
          ],
        }),
      },
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TableContainer>;

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Tables: Story = {
  render: (args) => {
    return (
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
  args: { sx: { minWidth: 650 } },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Basic() {
  return (
    <TableContainer>
      <Table ${argProps(storyContext)} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
        `,
      },
    },
  },
};
