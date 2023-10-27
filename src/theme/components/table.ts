import { tableAnatomy as parts } from "@chakra-ui/anatomy"

import { mode } from "@chakra-ui/theme-tools"
import type {
  PartsStyleFunction,
} from "@chakra-ui/theme-tools"



// export const Table: any = (props: any) => ({
//   variants: {
//     simple: {
//       th: {
//         color: mode("gray.600", "gray.400")(props),
//         borderBottom: "1px",
//         borderColor: mode("lifted.gray.100", "lifted.gray.600")(props),
//       },
//       td: {
//         borderBottom: "1px",
//         borderColor: mode("lifted.gray.100", "lifted.gray.600")(props),
//       },
//       caption: {
//         color: mode("lifted.gray.600", "lifted.gray.100")(props),
//       },
//       tfoot: {
//         tr: {
//           "&:last-of-type": {
//             th: { borderBottomWidth: 0 },
//           },
//         },
//       },
//     },
//   }
// });

export const Table = {
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
    }),
  },
}