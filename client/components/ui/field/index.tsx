import { Colors } from '@/constants/Colors';
import { ComponentPropsWithoutRef } from 'react';
import { Text, TextInput, View } from 'react-native';

interface Props extends ComponentPropsWithoutRef<typeof TextInput> {
  label: string;
  suffix?: string;
}

export const Field = ({ label, suffix, ...props }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Text style={{ fontWeight: '500', color: Colors.light.neutral[700] }}>
        {label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <TextInput
          {...props}
          style={{
            padding: 10,
            height: 48,
            borderWidth: 1,
            borderColor: Colors.light.neutral[200],
            borderRadius: 8,
            flex: 1,
          }}
        />
        {suffix && (
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: Colors.light.neutral[500],
            }}
          >
            {suffix}
          </Text>
        )}
      </View>
    </View>
  );
};
