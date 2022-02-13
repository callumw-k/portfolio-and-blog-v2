import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "../footer/Footer";
import Navbar from "../navigation/Navbar";

export default function Layout({ children }) {
  return (
    <Box
      overflowX="hidden"
      as="main"
      backgroundColor="neutral_cool_grey.900"
      textColor="white"
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
