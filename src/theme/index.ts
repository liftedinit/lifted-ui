import { extendTheme } from "@chakra-ui/react"

import { Textarea, Tabs, Button, Heading, Text, Input } from "./components"
import { colors, fonts, styles } from "./foundation"
export { ChakraProvider as ThemeProvider } from "@chakra-ui/react"

export const theme = extendTheme({
  colors,
  components: { Button, Heading, Input, Tabs, Text, Textarea },
  fonts,
  styles,
})
