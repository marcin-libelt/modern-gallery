interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

export const size: Size = {
  xs: "475px", // for small screen mobile
  sm: "640px", // for mobile screen
  md: "768px", // for tablets
  lg: "1024px", // for laptops
  xl: "1280px", // for desktop / monitors
  "2xl": "1536px", // for big screens
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  "2xl": `(min-width: ${size["2xl"]})`,
};
