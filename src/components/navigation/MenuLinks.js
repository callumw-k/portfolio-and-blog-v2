import React from "react";
import { Box, Link, Stack } from "@chakra-ui/react";

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "center", "flex-end"]}
        direction={["column", "column", "row"]}
        pt={[8, 8, 0, 0]}
        fontSize={["md", "xl"]}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
