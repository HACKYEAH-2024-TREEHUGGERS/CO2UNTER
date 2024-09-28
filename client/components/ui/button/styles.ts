import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

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
    transformOrigin: "center center",
  },
  primary: {
    backgroundColor: Colors.light.green[500],
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.light.neutral[300],
  },
  critical: {
    borderColor: "#DE1135",
    borderWidth: 1,
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

export type Variant = Exclude<keyof typeof styles, "buttonBase">;
