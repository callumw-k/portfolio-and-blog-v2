import React from "react";
import CoolListItem from "./CoolListItem";
import { Box, Container, Text } from "@chakra-ui/react";
import Section from "../layout/Section";

const CoolListItems = () => {
  const ListItems = [
    "React",
    "Gatsby",
    "Next.js",
    "Chakra UI",
    "Node",
    "C#",
    "SQL",
  ];

  return (
    <Section>
      <Container maxW="6xl">
        <Box maxW="2xl">
          {ListItems.map((item, index) => (
            <CoolListItem key={index} title={item} />
          ))}
          <Text mt="4">
            Refresh the page and these will change! <br /> random colors baby!
          </Text>
        </Box>
      </Container>
    </Section>
  );
};

export default CoolListItems;
