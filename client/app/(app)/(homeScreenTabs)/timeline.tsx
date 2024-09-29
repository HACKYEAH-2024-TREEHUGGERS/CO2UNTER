import { TimelineEntry } from '@/components/ui/timeline-entry';
import { Colors } from '@/constants/Colors';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TimelineTab() {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          marginVertical: 16,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: Colors.light.neutral[900],
          }}
        >
          Oś czasu
        </Text>
      </View>
      <View
        style={{
          gap: 24,
          paddingHorizontal: 16,
          paddingBottom: 24,
          position: 'relative',
        }}
      >
        <View style={styles.timeline} />
        <TimelineEntry activity={{ type: 'transport' }} />
        <TimelineEntry activity={{ type: 'media' }} />
        <TimelineEntry activity={{ type: 'media' }} />
        <TimelineEntry activity={{ type: 'transport' }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.neutral[0],
  },
  timeline: {
    height: '100%',
    width: 2,
    position: 'absolute',
    top: 0,
    left: 15,
    marginLeft: '30%',
    backgroundColor: Colors.light.green[300],
  },
});
