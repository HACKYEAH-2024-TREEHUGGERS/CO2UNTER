import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

export type Attribute = {
  value: string | number;
  unit: string;
  label: string;
} | null;

export type StatFieldIcon =
  | 'nature'
  | 'nature-people'
  | 'directions-car'
  | 'directions-bus'
  | 'directions-bike'
  | 'two-wheeler'
  | 'electric-scooter';

type Props = {
  icon: StatFieldIcon;
  value: string | number;
  label?: string;
  valueTextSize?: 'big' | 'small';
  style?: StyleProp<ViewStyle>;
  attributes?: [Attribute, Attribute, Attribute];
  green?: boolean;
};

export const StatField = ({
  icon,
  value,
  label = '',
  valueTextSize = 'big',
  style,
  attributes,
  green = false,
}: Props) => {
  const isBigValue = valueTextSize === 'big';

  const styles = useMemo(() => createStyles(green), [green]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.upperRow}>
        <View style={styles.valueContainer}>
          <MaterialIcons
            name={icon}
            size={24}
            color={green ? Colors.light.green[700] : Colors.light.neutral[700]}
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
      {attributes?.length && (
        <View style={styles.lowerRow}>
          {attributes.map((attribute, index) => (
            <View key={`${attribute?.label}${index}`} style={styles.attribute}>
              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Text>{attribute?.value}</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: green
                      ? Colors.light.green[700]
                      : Colors.light.neutral[500],
                  }}
                >
                  {attribute?.unit}
                </Text>
              </View>
              <Text style={styles.attributeLabel}>{attribute?.label}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const createStyles = (green: boolean) =>
  StyleSheet.create({
    container: {
      width: '100%',
      padding: 12,
      borderRadius: 8,
      backgroundColor: green
        ? Colors.light.green[50]
        : Colors.light.neutral[50],
    },
    upperRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    lowerRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: green ? Colors.light.green[100] : Colors.light.neutral[100],
      paddingTop: 12,
      marginTop: 12,
    },
    valueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    value: {
      color: green ? Colors.light.green[900] : Colors.light.neutral[900],
    },
    label: {
      fontSize: 14,
      color: green ? Colors.light.green[900] : Colors.light.neutral[900],
    },
    attribute: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      color: green ? Colors.light.green[900] : Colors.light.neutral[900],
      fontWeight: 'bold',
    },
    attributeLabel: {
      fontSize: 12,
      color: green ? Colors.light.green[700] : Colors.light.neutral[500],
      fontWeight: 'regular',
    },
  });
