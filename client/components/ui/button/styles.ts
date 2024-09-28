import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const config = {
  primary: {
    default: {
      background: Colors.light.green[500],
      border: "transparent",
      label: Colors.light.neutral[900],
    },
    active: {
      background: Colors.light.green[600],
      border: "transparent",
      label: Colors.light.neutral[900],
    },
    inactive: {
      background: Colors.light.green[200],
      border: "transparent",
      label: Colors.light.neutral[400],
    },
  },
  secondary: {
    default: {
      background: "transparent",
      border: Colors.light.neutral[300],
      label: Colors.light.neutral[900],
    },
    active: {
      background: "transparent",
      border: Colors.light.neutral[500],
      label: Colors.light.neutral[900],
    },
    inactive: {
      background: Colors.light.neutral[50],
      border: Colors.light.neutral[200],
      label: Colors.light.neutral[300],
    },
  },
  critical: {
    default: {
      background: "transparent",
      border: "#DE1135",
      label: "#DE1135",
    },
    active: {
      background: "#FFCACF",
      border: "#DE1135",
      label: "#DE1135",
    },
    inactive: {
      background: "transparent",
      border: "#FFCACF",
      label: "#FFCACF",
    },
  },
} as const;

export type Variant = keyof typeof config;
export type VariantState = keyof (typeof config)[Variant];

export const getButtonConfig = (variant: Variant, state: VariantState) =>
  config[variant][state];

export const styles = StyleSheet.create({
  buttonBase: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    position: "relative",
    gap: 8,
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    transformOrigin: "center center",
  },
} as const);

export const labelStyles = StyleSheet.create({
  buttonBase: {
    fontSize: 16,
    fontWeight: "500",
  },
  primary: {
    color: Colors.light.neutral[900],
  },
  secondary: {
    color: Colors.light.neutral[900],
  },
  critical: {
    color: "#DE1135",
  },
} as const);
