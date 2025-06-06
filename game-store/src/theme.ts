import { extendTheme } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/theme";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
});

export default theme;
