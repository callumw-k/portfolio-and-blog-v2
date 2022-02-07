import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Section from "./layout/Section";
import SecondaryHeading from "./ui/SecondaryHeading";

const FullWidthText = ({ title, children }) => {
  return (
    <Section>
      <Container maxW="6xl">
        <Flex direction="column">
          {title ? <SecondaryHeading> {title}</SecondaryHeading> : ""}
          <span pr={4} />
          {children}
        </Flex>
      </Container>
    </Section>
  );
};

export default FullWidthText;
