import React from "react";
import { Container, Heading, Stack } from "@chakra-ui/react";
import Section from "./layout/Section";

const Hero = () => {
  return (
    <Section>
      <Container height="calc(100vh - 100px)" maxW="6xl">
        <Stack
          py={[4, 5]}
          alignItems="end"
          justifyContent="end"
          spacing={4}
          textAlign="right"
          height="100%"
        >
          <Heading as="h1" size="4xl" mb={5} fontWeight="400">
            I'm an Australian programmer with a focus on development from a
            holistic perspective - how it can assist and grow a business or
            product.
          </Heading>
          <Heading size="md" as="h2">
            Callum Wellwood-Kane
          </Heading>
        </Stack>
      </Container>
    </Section>
  );
};

export default Hero;
