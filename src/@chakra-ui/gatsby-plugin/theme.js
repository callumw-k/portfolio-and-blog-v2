import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // body: {
      //   fontSize: { base: "md", md: "lg" },
      // },
      p: {
        marginBottom: 4,
      },
    },
  },
  colors: {
    primary_indigo: {
      100: "#E0E8F9",
      200: "#BED0F7",
      300: "#98AEEB",
      400: "#7B93DB",
      500: "#647ACB",
      600: "#4C64B8",
      700: "#35469C",
      800: "#2D3A8C",
      900: "#19216C",
    },
    primary_cyan: {
      50: "#E1FCF8",
      100: "#C1FEF6",
      200: "#92FDF2",
      300: "#62F4EB",
      400: "#3AE7E1",
      500: "#1CD4D4",
      600: "#0FB5BA",
      700: "#099AA4",
      800: "#07818F",
      900: "#05606E",
    },
    neutral_cool_grey: {
      50: "#F5F7FA",
      100: "#E4E7EB",
      200: "#CBD2D9",
      300: "#9AA5B1",
      400: "#7B8794",
      500: "#616E7C",
      600: "#52606D",
      700: "#3E4C59",
      800: "#323F4B",
      900: "#1F2933",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Poppins",
  },
});

export default theme;
