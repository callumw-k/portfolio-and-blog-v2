import React from "react";
import { Heading } from "@chakra-ui/react";

const SecondaryHeading = ({ children }) => {
  return (
    <Heading mb={8} as="h2">
      {children}
    </Heading>
  );
};

export default SecondaryHeading;
