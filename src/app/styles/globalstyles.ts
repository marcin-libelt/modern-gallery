"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    color: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.body};
    margin: 0;
    line-height: 1.5;
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    font-weight: normal;
  }
  
  h1 {
    font-size: 1.25rem;
  } 

  h2 {
    font-size: 1.125rem;
  }  
  
  
  h3, 
  h4, 
  h5, 
  h6 {
    font-size: 1rem;
  }
  
  img, video {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style-type: none;
  }

  a:hover {
    text-decoration-line: none;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }

  .text-center {
    text-align: center;
  }
`;
