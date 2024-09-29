import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

type Props<T> = {
  options: {
    value: T;
    label: string;
    icon: (color: string) => React.ReactNode;
  }[];
  selected: NoInfer<T[]>;
  onChange: (value: T) => void;
  title: string;
};

export const ListSelect = <const T extends string>({
  onChange,
  options,
  selected,
  title,
}: Props<T>) => {
  return (
    <View
      style={{
        gap: 4,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
      }}
    >
      <Text>{title}</Text>
      {options.map((option) => {
        const active = selected.includes(option.value);
        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              width: '100%',
              padding: 12,
              borderWidth: 1,
              borderColor: Colors.light.neutral[200],
              borderRadius: 8,
              ...(active && {
                backgroundColor: Colors.light.green[50],
              }),
            }}
          >
            {option.icon(
              active ? Colors.light.green[900] : Colors.light.neutral[700]
            )}
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: Colors.light.green[900],
              }}
            >
              {option.label}
            </Text>
            {active && (
              <Text
                style={{
                  marginLeft: 'auto',
                  color: Colors.light.green[700],
                }}
              >
                Wybrano
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};
