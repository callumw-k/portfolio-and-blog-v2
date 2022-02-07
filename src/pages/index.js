import * as React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import FullWidthText from "../components/FullWidthText";
import ProjectLines from "../components/projects/ProjectLines";
import { Text } from "@chakra-ui/react";
import CoolListItems from "../components/cool-list/CoolListItems";
import ScrollingText from "../components/scrolling-text/ScrollingText";
import Paragraph from "../components/ui/Paragraph";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <ScrollingText rotation={-3} light_pos="right" />
      <FullWidthText>
        <Paragraph>
          Well, I'm a BA Honours, First Class graduate in Graphic Design, with
          multiple software certifications from Adobe & Google. I also have
          multiple years experience in both Web & Print Industries.
        </Paragraph>
        <Paragraph>
          I live by the mantra "You can always learn more", and take this in a
          very literal sense. Pushing myself to learn new tools to add to the
          toolbelt. Like, for example, how I am self taught and versed in Web
          Design.
        </Paragraph>
      </FullWidthText>
      <ProjectLines />
      <CoolListItems />
      <ScrollingText rotation={3} light_pos="left" />
    </Layout>
  );
};

export default IndexPage;
