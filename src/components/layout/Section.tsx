import React, { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";

type SectionProps = {
  children: React.ReactNode;
  rest?: any | null;
};

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => {
  const { children, ...rest } = props;
  return (
    <Box mb={40} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
