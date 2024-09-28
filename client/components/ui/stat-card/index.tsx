import { State, useStateColors } from "@/hooks/useStateColors";
import { Text, View } from "react-native";

type Props = {
  value: number;
  children: string;
};

export const StatCard = ({ children, value }: Props) => {
  let state: State;
  if (value < 0.9) state = "positive";
  else if (value < 1.1) state = "neutral";
  else state = "negative";

  const colors = useStateColors(state);

  let label = "";
  if (value < 1) label = "mniej";
  else label = "więcej";

  return (
    <View
      style={{
        padding: 12,
        backgroundColor: colors.card,
        gap: 8,
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          color: colors.title,
          fontWeight: "700",
          fontSize: 24,
        }}
      >
        {Math.abs(100 - value * 100).toFixed(1)}%{" "}
        <Text style={{ fontSize: 14, fontWeight: "500" }}>{label}</Text>
      </Text>
      <Text
        style={{
          color: colors.body,
          maxWidth: "75%",
        }}
      >
        {children}
      </Text>
    </View>
  );
};
