import { mode } from "@chakra-ui/theme-tools";

export const Table = (props) => {
  return {
    baseStyle: {
      tr: {
        borderBottomWidth: "1px",
        borderBottomColor: mode("red.400", "blue.400")(props),
      },
    },
  }
};
