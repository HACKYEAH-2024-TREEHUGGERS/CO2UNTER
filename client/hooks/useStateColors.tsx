import { Colors } from "@/constants/Colors";

const MAP = {
  positive: {
    card: Colors.light.green[50],
    title: Colors.light.green[900],
    body: Colors.light.green[700],
    chart: Colors.light.green[500],
    chartFill: Colors.light.green[200],
  },
  negative: {
    card: "#FCF1F1",
    title: "#4E1919",
    body: "#771E1E",
    chart: "#C73434",
    chartFill: "#F2C0C0",
  },
  neutral: {
    card: Colors.light.neutral[50],
    title: Colors.light.neutral[900],
    body: Colors.light.neutral[500],
    chart: Colors.light.green[500],
    chartFill: Colors.light.green[200],
  },
} as const;

export type State = keyof typeof MAP;

export const useStateColors = (variant: State) => {
  return MAP[variant];
};
