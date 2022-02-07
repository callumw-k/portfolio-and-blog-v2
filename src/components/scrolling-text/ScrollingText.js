import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import Section from "../layout/Section";

const ScrollingText = ({ rotation, light_pos }) => {
  return (
    <Box as="section" py={40} position="relative">
      <Box
        borderStyle="solid"
        borderWidth="2px"
        borderColor="primary_cyan.400"
        transform={`rotate(${rotation}deg)`}
        py={8}
        marginLeft="-36px"
        width="120%"
      >
        <HStack w="3000px">
          <Text color="primary_cyan.400" fontSize="2xl" mb={0}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi
          </Text>
          <Text color="primary_cyan.400" fontSize="2xl" mb={0}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi
          </Text>
        </HStack>
      </Box>
      <Box
        position="absolute"
        left={"left" === light_pos ? "-20%" : "initial"}
        right={"right" === light_pos ? "-20%" : "initial"}
        top="0%"
        bottom="0%"
        width={["80%", "60%", "50%"]}
        max-height="500px"
        borderRadius="500px"
        bg="primary_indigo.900"
        filter="blur(100px)"
      />
    </Box>
  );
};

export default ScrollingText;
