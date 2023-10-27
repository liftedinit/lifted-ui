import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: Record<string, any>) => ({ 
    "html,body,#root": {
      bg: mode("lifted.gray.100","lifted.gray.800",)(props),
      bgColor: mode("lifted.gray.100","lifted.gray.800",)(props),
      color: mode("black","white")(props),
      height: "100%",
    },
    "text": {
      color: mode("black","white")(props),
      fill: mode("black","white")(props),
    },
    "tbody tr": {
      borderBottomColor: mode("lifted.gray.200","lifted.gray.400",)(props),
      borderBottomWidth: "1px",
    },
    "tbody td": {
      borderBottomColor: mode("lifted.gray.200","lifted.gray.400",)(props),
      borderBottomWidth: "1px",
    }
  }),
};
