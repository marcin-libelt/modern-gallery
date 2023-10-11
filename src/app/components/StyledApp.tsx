"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { useState } from "react";

const { colors } = theme;

const schema: { [char: string]: object } = {
  dark: {
    body: colors.black,
    font: colors.white,
  },
  light: {
    body: colors.white,
    font: colors.black,
  },
};

function StyledApp({ children }: { children: React.ReactNode }) {
  const [colorSchema] = useState<string>("light");

  return (
    <ThemeProvider theme={{ ...theme, ...schema[colorSchema] }}>
      {children}
    </ThemeProvider>
  );
}

export default StyledApp;
