import { CSSProperties } from "react";
import styled from "styled-components";

type FlexProps = {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  minWidth?: string;
};

// FLEX
export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
`;

export const FlexRow = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  align-items: ${({ alignItems }) => `${alignItems}`};
`;

export const FlexColumn = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  // align-items: center;
  width: ${({ width }) => `${width}`};
  min-width: ${({ minWidth }) => `${minWidth}`};
`;

// Menu on each page
export const Menu = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  height: 2rem;
`;

// Container on each page
export const Container = styled.div`
  background-color: clear;
  height: 100%;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding-top: 1rem;
`;

// Container for login components
export const CenterContainer = styled.div`
  background-color: "#ffffff";
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: rgb(0, 0, 0);
`;
