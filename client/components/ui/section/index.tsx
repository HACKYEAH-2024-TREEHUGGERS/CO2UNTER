import React, { PropsWithChildren } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

interface SectionWrapperProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const Section: React.FC<PropsWithChildren<SectionWrapperProps>> = ({
  title,
  children,
  style,
}) => {
  return (
    <View style={[{ marginTop: 24, gap: 12 }, style]}>
      <Text
        style={{
          fontWeight: '500',
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};
