import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native';

type Props = {
  icon: string;
  label: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const ListButton: React.FC<Props> = ({
  icon,
  label,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          width: '100%',
          padding: 12,
          borderWidth: 1,
          borderColor: Colors.light.neutral[200],
          borderRadius: 8,
        },
        style,
      ]}
    >
      <MaterialIcons
        name={icon as any}
        size={24}
        color={Colors.light.green[900]}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: Colors.light.green[900],
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
