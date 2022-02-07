import React from "react";
import { Box } from "@chakra-ui/react";

const Section = (props) => {
  const { children, ...rest } = props;
  return (
    <Box mb={40} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
