import { Box, LinearProgress } from "@material-ui/core";
import React from "react";
import { Flex } from "./shared";

export const LoadingView = () => {
  return (
    <Flex fullHeight>
      <Box style={{ width: "100%" }}>
        <LinearProgress color="secondary" />
      </Box>
    </Flex>
  );
};
