import React from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import {
  getButtonConfig,
  labelStyles,
  styles,
  Variant,
  VariantState,
} from './styles';
import { Loader } from '../loader';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type AnimatedPressableRef = React.ComponentRef<typeof Pressable>;

type Props = {
  children: string;
  loading?: boolean;
  variant?: Variant;
  state?: VariantState;
  icon?: {
    icon: (color: string) => React.ReactNode;
    position?: 'left' | 'right';
  };
  onPress?: () => void;
};

const Button = React.forwardRef<AnimatedPressableRef, Props>(
  (
    {
      children,
      loading,
      variant = 'primary',
      state = 'default',
      icon,
      onPress,
      ...props
    },
    ref
  ) => {
    const config = getButtonConfig(variant, loading ? 'inactive' : state);

    return (
      <AnimatedPressable
        onPress={onPress}
        layout={LinearTransition.springify()}
        ref={ref}
        {...props}
        style={[
          styles.buttonBase,
          {
            backgroundColor: config.background,
            borderColor: config.border,
          },
        ]}
      >
        {!loading ? (
          <>
            {icon?.position === 'left' && icon.icon(config.label)}
            <Text
              style={[
                labelStyles.buttonBase,
                {
                  color: config.label,
                },
              ]}
            >
              {children}
            </Text>
            {icon?.position === 'right' && icon.icon(config.label)}
          </>
        ) : (
          <Loader color={config.label} />
        )}
      </AnimatedPressable>
    );
  }
);

Button.displayName = 'Button';

export { Button };
