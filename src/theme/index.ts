import { extendTheme } from "@chakra-ui/react"
import { Textarea, Tabs, Table, Button, Heading, Text, Input } from ".."
import { mode } from "@chakra-ui/theme-tools";
import { colors, fonts, styles } from "./foundation"
export { ChakraProvider as ThemeProvider } from "@chakra-ui/react"

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors,
  components: { 
    Table: (props: Record<string, any>) => ({
      baseStyle: {
        th: {
          borderColor: mode("lifted.gray.200","lifted.gray.700",)(props),
        },
        td: {
          borderColor: mode("lifted.gray.200","lifted.gray.700",)(props),
        },
      },
    }),
  },
  fonts,
  styles,
})
