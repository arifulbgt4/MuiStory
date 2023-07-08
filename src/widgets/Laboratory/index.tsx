"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import Button from "@mui/material/Button";

import { ColorModeContext } from "src/theme";

const Laboratory = ({ children }: { children: React.ReactNode }) => {
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <section>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: 1,
          alignItems: "center",
          background: (theme) => theme.palette.action.focus,
          p: 2,
          mb: 4,
        }}
      >
        <Typography textTransform="uppercase" variant="h2" color="primary">
          Components Laboratory
        </Typography>
        <Button variant="contained" onClick={toggleColorMode}>
          Change Color Mode
        </Button>
      </Box>
      {children}
    </section>
  );
};

export default Laboratory;
