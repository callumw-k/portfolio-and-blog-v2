import * as React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import FullWidthText from "../components/FullWidthText";
import ProjectLines from "../components/projects/ProjectLines";
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ex iure magni quae reiciendis, saepe similique suscipit tempora! Ad
          aperiam cupiditate ducimus iste labore quae sapiente? Atque in
          repellat voluptatum?
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ex iure magni quae reiciendis, saepe similique suscipit tempora! Ad
          aperiam cupiditate ducimus iste labore quae sapiente? Atque in
          repellat voluptatum?
        </Paragraph>
      </FullWidthText>
      <ProjectLines />
      <CoolListItems />
      <ScrollingText rotation={3} light_pos="left" />
    </Layout>
  );
};

export default IndexPage;
