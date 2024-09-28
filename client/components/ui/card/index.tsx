import { Colors } from "@/constants/Colors";
import { Canvas, Rect, RoundedRect, Shadow } from "@shopify/react-native-skia";
import { StyleSheet, View } from "react-native";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";

type Props = {
  children: React.ReactNode;
  offset?: number;
  radius?: number;
};

export const Card = ({ children, offset = 0, radius = 0 }: Props) => {
  const size = useSharedValue({
    width: 0,
    height: 0,
  });

  const width = useDerivedValue(() => size.value.width);
  const height = useDerivedValue(() => size.value.height);

  return (
    <View
      style={{
        position: "relative",
        paddingVertical: offset,
      }}
    >
      <View
        style={{
          borderRadius: radius,
          backgroundColor: Colors.light.neutral[0],
        }}
        onLayout={(e) => {
          size.value = {
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
          };
        }}
      >
        {children}
      </View>
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          marginLeft: -offset,
          marginRight: -offset,
          zIndex: -1,
        }}
      >
        <RoundedRect
          x={offset}
          y={offset}
          width={width}
          height={height}
          color={Colors.light.neutral[100]}
          opacity={0.15}
          r={radius}
        >
          <Shadow
            dx={0}
            dy={4}
            blur={16}
            color={Colors.light.neutral[1000]}
            shadowOnly
          />
        </RoundedRect>
      </Canvas>
    </View>
  );
};
