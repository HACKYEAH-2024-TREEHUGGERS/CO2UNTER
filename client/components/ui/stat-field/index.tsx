import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

type Props = {
  icon:
    | 'nature'
    | 'nature-people'
    | 'directions-car'
    | 'directions-bus'
    | 'directions-bike';
  value: string | number;
  label: string;
  valueTextSize?: 'big' | 'small';
  style?: StyleProp<ViewStyle>;
};

export const StatField = ({
  icon,
  value,
  label,
  valueTextSize = 'big',
  style,
}: Props) => {
  const isBigValue = valueTextSize === 'big';

  return (
    <View style={[styles.container, style]}>
      <View style={styles.valueContainer}>
        <MaterialIcons
          name={icon}
          size={24}
          color={Colors.light.neutral[700]}
        />
        <Text
          style={{
            fontSize: isBigValue ? 24 : 14,
            fontWeight: isBigValue ? 'bold' : 'medium',
          }}
        >
          {value}
        </Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.light.neutral[50],
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  value: {
    color: Colors.light.neutral[900],
  },
  label: {
    fontSize: 14,
    color: Colors.light.neutral[900],
  },
});
