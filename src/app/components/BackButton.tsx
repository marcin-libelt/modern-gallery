"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import { device } from "@/app/styles/breakpoints";

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.font};
`;

const Label = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;

  @media (${device.xs}) {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
`;

const BackButton = () => {
  const router = useRouter();

  return (
    <StyledButton onClick={() => router.back()} type="button">
      &#171; back <Label>to the gallery</Label>
    </StyledButton>
  );
};

BackButton.displayName = "BackButton";

export default BackButton;
