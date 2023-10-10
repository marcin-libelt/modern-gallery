"use client";
import { ThemeProvider } from "styled-components";

const theme = {
  body: "#5e4848",
  font: "#fff",
};

function StyledApp({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default StyledApp;
