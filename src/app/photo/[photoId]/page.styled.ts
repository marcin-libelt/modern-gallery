"use client";

import styled from "styled-components";
import { device } from "@/app/styles/breakpoints";

const PhotoPageWrapper = styled.div`
  @media (${device.md}) {
    align-items: flex-start;
    display: flex;
    gap: 2rem;
  }
`;

const Media = styled.div`
  @media (${device.md}) {
    width: 66.666667%;
    padding: 0.5rem;
    border: 1px solid #7f7f89;
  }
`;

const Info = styled.div`
  margin-top: 0.5rem;
  top: 100px;
  @media (${device.md}) {
    width: 33.333333%;
    margin-top: 0;
    position: sticky;
  }

  .meta {
    font-size: 0.75rem;
    color: #7f7f89;
  }

  .meta.name {
    font-style: italic;
    font-size: 0.875rem;
    white-space: nowrap;
  }

  .heading {
    margin-top: 0.75rem;
    margin-bottom: 2.5rem;
    line-height: 1.5;

    @media (${device.md}) {
      margin-bottom: 1.25rem;
    }
  }
`;

export { Info, Media, PhotoPageWrapper };
