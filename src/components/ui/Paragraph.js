import React from "react";
import { Text } from "@chakra-ui/react";
const Paragraph = (props) => {
  const { children, ...rest } = props;
  return (
    <Text fontSize={{ base: "md", md: "xl" }} {...rest}>
      {children}
    </Text>
  );
};

export default Paragraph;
