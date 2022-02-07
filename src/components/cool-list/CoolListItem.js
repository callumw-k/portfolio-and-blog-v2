import React from "react";
import { Box, Text } from "@chakra-ui/react";

const CoolListItem = ({ title }) => {
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <Box
      display="inline-block"
      fontSize="3xl"
      bg={getRandomColor}
      borderRadius="full"
      px="4"
      py="2"
      mr="4"
      mb="4"
    >
      <Text mixBlendMode="difference" mb={0}>
        {title}
      </Text>
    </Box>
  );
};

export default CoolListItem;
