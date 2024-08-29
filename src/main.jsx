import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme.js";
import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import MYRouter from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <Box className="d-flex">
          <CircularProgress />
        </Box>
      }
    >
      <ThemeProvider theme={theme}>
        <MYRouter />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);
