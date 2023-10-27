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
    Table: {
      baseStyle: {
        th: {
          borderColor: "red.500",
        },
        td: {
          borderColor: "blue.500",
        },
      },
      variants: {
        simple: (props:any) => ({
          th: {
            color: mode("gray.600", "gray.400"),
            borderBottom: "1px",
            borderColor: mode("lifted.gray.100", "lifted.gray.600"),
          },
          td: {
            borderBottom: "1px",
            borderColor: mode("lifted.gray.100", "lifted.gray.600"),
          },
          caption: {
            color: mode("lifted.gray.600", "lifted.gray.100"),
          },
          tfoot: {
            tr: {
              "&:last-of-type": {
                th: { borderBottomWidth: 0 },
              },
            },
          },
        }),
      },
    },
  },
  fonts,
  styles,
})
