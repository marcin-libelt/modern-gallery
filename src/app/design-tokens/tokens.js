const { type } = require("os");

module.exports = {
  colors: {
    primary: {
      value: "#FF9E42",
      type: "color",
    },
    secondary: {
      value: "#7F7F89",
      type: "color",
    },
    background: {
      value: "#0C0C18",
      type: "color",
    },
    "alert-info": {
      value: "#2d3390",
      type: "color",
    },
    "alert-danger": {
      value: "#d55050",
      type: "color",
    },
    "alert-success": {
      value: "#2c8613",
      type: "color",
    },
    "alert-warning": {
      value: "#d65f22",
      type: "color",
    },
    white: {
      value: "#fafafa",
      type: "color",
    },
    black: {
      value: "#010101",
      type: "color",
    },
  },
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
