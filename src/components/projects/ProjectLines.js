import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import ProjectLine from "./ProjectLine";
import Section from "../layout/Section";
import SecondaryHeading from "../ui/SecondaryHeading";

const ProjectLines = () => {
  return (
    <Section>
      <Container maxW="6xl">
        <SecondaryHeading>Projects</SecondaryHeading>
        <ProjectLine
          title="Pryo App"
          link_title="Click here"
          project_type="App"
          url="/about"
        />
      </Container>
    </Section>
  );
};

export default ProjectLines;
