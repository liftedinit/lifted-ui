import { extendTheme } from "@chakra-ui/react"
// import { Textarea, Tabs, Table, Button, Heading, Text, Input } from ".."
import { mode } from "@chakra-ui/theme-tools"
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
      variants: {
        simple: {
          th: {
            color: mode("gray.600", "gray.400")(props),
            borderBottom: "1px",
            borderColor: mode("lifted.gray.100", "lifted.gray.600")(props),
          },
          td: {
            borderBottom: "1px",
            borderColor: mode("lifted.gray.100", "lifted.gray.600")(props),
          },
          caption: {
            color: mode("lifted.gray.600", "lifted.gray.100")(props),
          },
          tfoot: {
            tr: {
              "&:last-of-type": {
                th: { borderBottomWidth: 0 },
              },
            },
          },
        },
      }
    }),
  },
  fonts,
  styles,
})
