import React from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { labelStyles, styles, Variant } from "./styles";
import { Loader } from "../loader";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type AnimatedPressableRef = React.ComponentRef<typeof Pressable>;

type Props = {
  children: string;
  loading?: boolean;
  variant?: Variant;
};

const Button = React.forwardRef<AnimatedPressableRef, Props>(
  ({ children, loading, variant = "primary", ...props }, ref) => {
    const variantStyle = styles[variant];
    const labelStyle = labelStyles[variant as keyof typeof labelStyles];

    return (
      <AnimatedPressable
        layout={LinearTransition.springify()}
        ref={ref}
        {...props}
        style={[styles.buttonBase, variantStyle]}
      >
        {!loading ? (
          <Text style={[labelStyles.buttonBase, labelStyle]}>{children}</Text>
        ) : (
          <Loader color="black" />
        )}
      </AnimatedPressable>
    );
  }
);

Button.displayName = "Button";

export { Button };
