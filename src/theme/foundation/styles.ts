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
    ".table-lifted td": {
      borderBottomColor: mode("lifted.gray.200","lifted.gray.500",)(props),
    },
    ".apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title": {
      bg: mode("lifted.gray.100","lifted.gray.800",)(props),
      borderBottomColor: mode("black","white")(props),
    },
    ".apexcharts-tooltip-title": {
      color: mode("black","lifted.gray.500")(props),
    },
    ".apexcharts-tooltip.apexcharts-theme-light" : {
      bg: mode("lifted.gray.100","lifted.gray.800",)(props),
      color: mode("black","white")(props),
    },
    ".apexcharts-tooltip-text-y-label": {
      color: mode("black","lifted.gray.500")(props),
    },
  }),
};
