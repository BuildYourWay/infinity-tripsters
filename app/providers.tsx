"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2d7dff",
    },
    background: {
      default: "#050915",
      paper: "#071027",
    },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const cache = React.useMemo(() => createCache({ key: "mui", prepend: true }), []);
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

