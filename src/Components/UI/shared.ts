import { CSSProperties } from "react";
import styled from "styled-components";

type FlexProps = {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  minWidth?: string;
  height?: string;
  fullHeight?: boolean;
};

// FLEX
export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
  height: ${({ height, fullHeight }) => (fullHeight ? "100vh" : `${height}`)};
  justify-content: ${({ justifyContent }) => `${justifyContent}`};
  width: ${({ width }) => `${width}`};
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
  height: 100vh;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding-top: 1rem;
`;

// Container for login component
export const CenterContainer = styled.div`
  background-color: clear;
  border: 0.2px solid lightgray;
  padding: 3rem;
  border-radius: 5px;
  width: 80%;
  min-width: 20rem;
  max-width: 30rem;
  margin: 0 auto;
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(5px + 2vmin);
  color: rgb(0, 0, 0);
`;
