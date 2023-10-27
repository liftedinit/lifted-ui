import { tableAnatomy as parts } from "@chakra-ui/anatomy"

import { mode } from "@chakra-ui/theme-tools"
import type {
  PartsStyleFunction,
} from "@chakra-ui/theme-tools"


const baseStyle = {
  th: {
    borderColor: "red.500",
  },
  td: {
    borderColor: "blue.500",
  }
}

const variantSimple: PartsStyleFunction<typeof parts> = (props) => {

  return {
    th: {
      color: mode("gray.600", "gray.400"),
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
  }
}

const variants = {
  simple: variantSimple,
  unstyled: {},
}


export const Table: any = {
  baseStyle,
  variants,
}
