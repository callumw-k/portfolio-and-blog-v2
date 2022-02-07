import React, { useState } from "react";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import MenuLinks from "./MenuLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Box as="header">
      <Container maxW="6xl">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          py={8}
        >
          <h1>Logo</h1>
          <Button
            bg="primary_cyan.900"
            _hover={{ bg: "primary_cyan.800" }}
            display={{ base: "block", md: "none" }}
            onClick={toggle}
          >
            Menu Button
          </Button>
          <MenuLinks isOpen={isOpen} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
