import React, { FunctionComponent, MouseEvent, useState } from "react";
// @ts-ignore
import { AspectRatio, Flex, Heading, Image, Text } from "@chakra-ui/react";
// @ts-ignore
import { Link } from "gatsby";
// @ts-ignore
import { HoverHandlers, motion } from "framer-motion";

const MotionImage = motion(Image);
type ProjectLineProps = {
  title: string;
  project_type: string;
  url: string;
  link_title: string;
  image_link: string;
};
const ProjectLine: FunctionComponent<ProjectLineProps> = ({
  title,
  project_type,
  url,
  link_title,
  image_link,
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [imagePos, setImagePos] = useState([400, 20]);
  const setPicPosition = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.tagName === "DIV") {
      e.stopPropagation();
      let rect = e.currentTarget.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      setImagePos([x + 50, y - 50]);
    }
  };
  const variants = {
    visible: {
      translateX: imagePos[0],
      translateY: imagePos[1],
      opacity: 1,
      display: "block",
    },
    hidden: {
      opacity: 0,
      transitionEnd: {
        translateX: imagePos[0],
        translateY: imagePos[1],
        display: "none",
      },
    },
  };

  return (
    <Link to="/about">
      <Flex
        onMouseMove={setPicPosition}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        py="8"
        borderColor="neutral_cool_grey.700"
        borderWidth="2px"
        borderStyle="solid"
        borderRight="none"
        borderLeft="none"
        direction="row"
        align="center"
        position="relative"
        zIndex="20"
      >
        <Heading as="h3" size="lg" mr="4">
          {title}
        </Heading>
        <Text mb={0} mr="auto" fontSize="xl">
          {project_type}
        </Text>
        <MotionImage
          position="absolute"
          src={image_link}
          variants={variants}
          animate={mouseOver ? "visible" : "hidden"}
          transition={{
            translateX: { duration: 0.0001 },
            translateY: { duration: 0.0001 },
          }}
        />
      </Flex>
    </Link>
  );
};

export default ProjectLine;
