import { CSSProperties } from "react";
import styled from "styled-components";

type FlexProps = {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  minWidth?: string;
};
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
  justify-content: flex-end;
  height: 2rem;
`;

// Container on each page
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
`;
