import { extendTheme } from "@chakra-ui/react"
import { Textarea, Tabs, Button, Heading, Text, Input, Code } from ".."
import { colors, fonts, styles } from "./foundation"
export { ChakraProvider as ThemeProvider } from "@chakra-ui/react"

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors,
  components: { Button, Heading, Input, Tabs, Text, Textarea, Code },
  fonts,
  styles,
})
