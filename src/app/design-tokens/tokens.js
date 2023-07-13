const { type } = require("os");

const COLOR_PRIMARY = "#fb8500ff";
const COLOR_PRIMARY_LIGHTER = "#ffb703ff";
const COLOR_SECONDARY = "#023047ff";
const COLOR_SECONDARY_LIGHTER = "#219ebcff";
const COLOR_BACKGROUND = "#010101";
const COLOR_BLUE = "#2d3390";
const COLOR_RED = "#d55050";
const COLOR_ORANGE = "#d65f22";
const COLOR_GREEN = "#2c8613";
const COLOR_WHITE = "#fafafa";

module.exports = {
  borderRadius: {
    sm: {
      value: "4px",
      type: "borderRadius",
    },
    lg: {
      value: "8px",
      type: "borderRadius",
    },
    xl: {
      value: "16px",
      type: "borderRadius",
    },
  },
  colors: {
    primary: {
      value: COLOR_PRIMARY,
      type: "color",
    },
    "primary-lighter": {
      value: COLOR_PRIMARY_LIGHTER,
      type: "color",
    },
    secondary: {
      value: COLOR_SECONDARY,
      type: "color",
    },
    "secondary-lighter": {
      value: COLOR_SECONDARY_LIGHTER,
      type: "color",
    },
    background: {
      value: COLOR_BACKGROUND,
      type: "color",
    },
    "alert-info": {
      value: COLOR_BLUE,
      type: "color",
    },
    "alert-danger": {
      value: COLOR_RED,
      type: "color",
    },
    "alert-success": {
      value: COLOR_GREEN,
      type: "color",
    },
    "alert-warning": {
      value: COLOR_ORANGE,
      type: "color",
    },
    white: {
      value: COLOR_WHITE,
      type: "color",
    },
  },
  opacity: {
    low: {
      value: "10%",
      type: "opacity",
    },
    md: {
      value: "50%",
      type: "opacity",
    },
    high: {
      value: "90%",
      type: "opacity",
    },
  },
  fontFamilies: {
    heading: {
      value: "Inter",
      type: "fontFamilies",
    },
    body: {
      value: "Roboto",
      type: "fontFamilies",
    },
  },
  lineHeights: {
    heading: {
      value: "110%",
      type: "lineHeights",
    },
    body: {
      value: "140%",
      type: "lineHeights",
    },
  },
  letterSpacing: {
    default: {
      value: "0",
      type: "letterSpacing",
    },
    increased: {
      value: "150%",
      type: "letterSpacing",
    },
    decreased: {
      value: "-5%",
      type: "letterSpacing",
    },
  },
  paragraphSpacing: {
    h1: {
      value: "32",
      type: "paragraphSpacing",
    },
    h2: {
      value: "26",
      type: "paragraphSpacing",
    },
  },
  fontWeights: {
    headingRegular: {
      value: "Normal",
      type: "fontWeights",
    },
    headingBold: {
      value: "Bold",
      type: "fontWeights",
    },
    bodyRegular: {
      value: "Normal",
      type: "fontWeights",
    },
    bodyBold: {
      value: "Bold",
      type: "fontWeights",
    },
  },
  fontSizes: {
    h1: {
      value: "{fontSizes.h2} * 1.25",
      type: "fontSizes",
    },
    h2: {
      value: "{fontSizes.h3} * 1.25",
      type: "fontSizes",
    },
    h3: {
      value: "{fontSizes.h4} * 1.25",
      type: "fontSizes",
    },
    h4: {
      value: "{fontSizes.h5} * 1.25",
      type: "fontSizes",
    },
    h5: {
      value: "{fontSizes.h6} * 1.25",
      type: "fontSizes",
    },
    h6: {
      value: "{fontSizes.body} * 1",
      type: "fontSizes",
    },
    body: {
      value: "16",
      type: "fontSizes",
    },
    sm: {
      value: "{fontSizes.body} * 0.85",
      type: "fontSizes",
    },
    xs: {
      value: "{fontSizes.body} * 0.65",
      type: "fontSizes",
    },
  },
};
