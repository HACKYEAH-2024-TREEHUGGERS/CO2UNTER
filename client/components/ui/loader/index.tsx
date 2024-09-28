import { LoaderIcon } from "@/components/icons/loader";
import { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { SvgProps } from "react-native-svg";

export const Loader = (props: SvgProps) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = 0;
    rotation.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: 24,
          height: 24,
          alignItems: "center",
          justifyContent: "center",
        },
        animatedStyle,
      ]}
    >
      <LoaderIcon {...props} />
    </Animated.View>
  );
};
