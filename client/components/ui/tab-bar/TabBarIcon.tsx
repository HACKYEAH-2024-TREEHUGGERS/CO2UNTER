import { Colors } from '@/constants/Colors';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type tabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
} & { icon: ReactNode };

export const TabBarIcon: React.FC<tabBarIconProps> = ({
  focused,
  size,
  icon,
}) => {
  const strokeStyle = useAnimatedStyle(() => {
    return {
      width: size,
      height: 4,
      backgroundColor: Colors.light.green[500],
      borderRadius: 2,
      opacity: withTiming(focused ? 1 : 0, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      }),
      transform: [
        {
          translateY: withTiming(focused ? 0 : 8, {
            duration: 200,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  return (
    <Animated.View style={styles.container}>
      {icon}
      {focused && <Animated.View style={strokeStyle} />}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
});
