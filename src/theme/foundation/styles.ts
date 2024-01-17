import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: Record<string, any>) => ({ 
    "html,body,#root": {
      bg: mode("lifted.gray.100","#03030f",)(props),
      bgColor: mode("lifted.gray.100","#03030f",)(props),
      color: mode("black","white")(props),
      height: "100%",
    },
    "text": {
      color: mode("black","white")(props),
      fill: mode("black","white")(props),
    },
    ".talib-table td": {
      borderBottomColor: mode("lifted.gray.200","lifted.gray.500",)(props),
    },
    ".talib-chart .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title": {
      bg: mode("lifted.gray.100","#03030f",)(props),
      borderBottomColor: mode("lifted.gray.200","lifted.gray.500",)(props),
    },
    ".talib-chart .apexcharts-tooltip-title": {
      color: mode("black","lifted.gray.500")(props),
    },
    ".talib-chart .apexcharts-tooltip.apexcharts-theme-light" : {
      bg: mode("lifted.gray.100","lifted.gray.700",)(props),
      color: mode("black","white")(props),
      borderColor: mode("lifted.gray.200","lifted.gray.500",)(props),
    },
    ".talib-chart .apexcharts-tooltip-text-y-label": {
      color: mode("black","white")(props),
    },
    ".talib-chart .apexcharts-tooltip-text-y-value": { 
      color: mode("black","white")(props),
    },
    ".metric-nav a:hover": { 
      color: "brand.teal.500",
      textDecoration: "none",
      cursor: "pointer"
    },
    ".metric-nav a:active": { 
      color: "brand.teal.50",
      textDecoration: "none"
    }
  }),
};
