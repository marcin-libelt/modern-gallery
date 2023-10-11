"use client";

import styled from "styled-components";
import { device, size } from "./breakpoints";

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  width: 100%;
  max-width: ${size.xl};

  @media (${device.lg}) {
    width: 75%;
  }
`;

const StyledFooter = styled.footer`
  font-size: 0.75rem;
  margin: 1.25rem auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1.25rem;

  a {
    color: ${({ theme }) => theme.font};
  }

  p {
    line-height: 1.5;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  position: relative;

  @media (${device.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (${device.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (${device.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export { LayoutContainer, StyledFooter, StyledGrid };
