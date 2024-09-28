import { Colors } from "@/constants/Colors";
import { Fragment, useId } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

type Props<T extends string> = {
  options: {
    value: T;
    label: string;
  }[];
  selected: NoInfer<T>;
  onChange: (value: NoInfer<T>) => void;
};

export const Tabs = <const T extends string>({
  options,
  selected,
  onChange,
}: Props<T>) => {
  const id = useId();

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 32,
        padding: 2,
        backgroundColor: Colors.light.neutral[50],
        borderRadius: 10,
      }}
    >
      {options.map((option) => {
        const active = option.value === selected;

        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                ...(active && {
                  fontWeight: "500",
                  color: Colors.light.neutral[0],
                }),
              }}
            >
              {option.label}
            </Text>
            {active && (
              <Animated.View
                sharedTransitionTag={`tabs-${id}`}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  zIndex: -1,
                  borderRadius: 8,
                  backgroundColor: Colors.light.neutral[700],
                }}
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
};
