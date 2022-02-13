import React, { FunctionComponent } from "react";
import { Heading } from "@chakra-ui/react";
type SecondaryHeadingProps = {
  children: React.ReactNode;
};
const SecondaryHeading: FunctionComponent<SecondaryHeadingProps> = ({
  children,
}) => {
  return (
    <Heading mb={8} as="h2">
      {children}
    </Heading>
  );
};

export default SecondaryHeading;
