// Static assets must be imported first
import cubePng from "./assets/cube.png"
import logoSvg from "./assets/logo.svg"
export { cubePng, logoSvg }

// Export both ChakraUI components and local components
export * from "./components"

// Explicit re-export to override the ChakraUI theme
export { ThemeProvider, theme } from "./theme"

// The rest are straightforward
export * from "./helpers"
export * from "./hooks"
export * from "./lib"
