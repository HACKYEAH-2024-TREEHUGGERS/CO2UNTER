import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';

export type ActivityType = 'transport' | 'media';

export type Activity = {
  type: ActivityType;
};

type TimelineEntryProps = {
  activity: Activity;
  style?: StyleProp<ViewStyle>;
};

export const TimelineEntry = ({ activity, style }: TimelineEntryProps) => {
  const styles = useMemo(() => createStyles(activity.type), [activity.type]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftSide}>
        <View style={styles.circle} />
      </View>
      <View style={styles.rightSide}>
        <Text>Timeline Entry</Text>
      </View>
    </View>
  );
};

const createStyles = (activityType: ActivityType) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
    },
    leftSide: {
      position: 'relative',
      width: '30%',
      padding: 16,
    },
    rightSide: {
      position: 'relative',
      width: '70%',
      padding: 16,
    },
    circle: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: Colors.light.green[500],
      position: 'absolute',
      right: -8,
      top: 8,
    },
  });
