import React from "react";
import Navbar from "../navigation/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../footer/Footer";

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
