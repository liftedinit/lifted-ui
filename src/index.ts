// Explicit re-export for static assets
export { default as cubePng } from "./assets/cube.png";
export { default as logoSvg } from "./assets/logo.svg";

// Re-export ChakraUI components
export * from "@chakra-ui/react";

// Explicit re-export to override the ChakraUI theme
export { ThemeProvider, theme } from "./theme";
