import React, { FunctionComponent } from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import ProjectLine from "./ProjectLine";
import Section from "../layout/Section";
import SecondaryHeading from "../ui/SecondaryHeading";

interface Projects {
  title: string;
  link_title: string;
  project_type: string;
  url: string;
  image: string;
}
const ProjectLines: FunctionComponent = () => {
  const projects: Projects[] = [
    {
      title: "This Website",
      link_title: "This Website",
      project_type: "Website",
      url: "projects/this-website",
      image: "https://source.unsplash.com/fiXLQXAhCfk/300x300",
    },
  ];
  return (
    <Section>
      <Container maxW="6xl">
        <SecondaryHeading>Projects</SecondaryHeading>
        {projects.map((project) => {
          return (
            <ProjectLine
              key={project.title}
              title={project.title}
              project_type={project.project_type}
              url={project.url}
              link_title={project.link_title}
              image_link={project.image}
            />
          );
        })}
      </Container>
    </Section>
  );
};

export default ProjectLines;
