import { Section } from '@/components/ui/section';
import { Activity, TimelineEntry } from '@/components/ui/timeline-entry';
import { Colors } from '@/constants/Colors';
import { Shadows } from '@/constants/Styles';
import { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';

const DATA_ACTIVITIES = [
  {
    type: 'transport',
    date: '2024-01-01',
  },
  {
    type: 'media',
    date: '2024-01-02',
  },
  {
    type: 'media',
    date: '2024-01-03',
  },
  {
    type: 'transport',
    date: '2024-01-04',
  },
  {
    type: 'media',
    date: '2024-01-05',
  },
  {
    type: 'media',
    date: '2024-01-06',
  },
  {
    type: 'transport',
    date: '2024-01-07',
  },
  {
    type: 'media',
    date: '2024-01-08',
  },
  {
    type: 'media',
    date: '2024-01-09',
  },
  {
    type: 'transport',
    date: '2024-01-10',
  },
  {
    type: 'media',
    date: '2024-09-29',
  },
].sort((b, a) => a.date.localeCompare(b.date)) as Activity[];

export default function TimelineTab() {
  const [startDate, setStartDate] = useState<DateType>(
    new Date(DATA_ACTIVITIES[DATA_ACTIVITIES.length - 1].date)
  );
  const [endDate, setEndDate] = useState<DateType>(
    new Date(DATA_ACTIVITIES[0].date)
  );

  const currentActivities = useMemo(() => {
    return DATA_ACTIVITIES.filter((activity) => {
      return (
        new Date(activity.date) >= new Date(startDate as Date) &&
        new Date(activity.date) <= new Date(endDate as Date)
      );
    });
  }, [startDate, endDate]);

  return (
    <>
      <View
        style={{
          width: '100%',
          backgroundColor: Colors.light.neutral[0],
        }}
      >
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

        <View style={styles.dateRangePicker}>
          <DateTimePicker
            mode="range"
            startDate={startDate}
            endDate={endDate}
            onChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
            height={150}
            weekDaysContainerStyle={{
              backgroundColor: 'transparent',
            }}
            dayContainerStyle={{ backgroundColor: 'transparent' }}
            selectedItemColor={Colors.light.green[600]}
            headerButtonColor={Colors.light.green[600]}
            selectedRangeBackgroundColor={Colors.light.green[200]}
            maxDate={DATA_ACTIVITIES[0].date}
            minDate={DATA_ACTIVITIES[DATA_ACTIVITIES.length - 1].date}
          />
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              padding: 24,
              paddingBottom: 12,
            }}
          >
            <Text>W tym okresie wyemitowałeś</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>1024</Text>
              <Text style={{ fontSize: 12 }}>kg CO₂</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ minHeight: '100%' }}
      >
        <View
          style={{
            minHeight: '100%',
            gap: 24,
            paddingHorizontal: 16,
            paddingBottom: 24,
            position: 'relative',
          }}
        >
          <View style={styles.timeline} />
          <View style={{ height: 12 }} />
          {currentActivities.map((activity, index) => (
            <TimelineEntry key={index} activity={activity} />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: Colors.light.neutral[0],
  },
  timeline: {
    height: '100%',
    width: 4,
    position: 'absolute',
    top: 0,
    left: 14,
    marginLeft: '30%',
    backgroundColor: Colors.light.green[300],
  },
  dateRangePicker: {
    position: 'relative',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Colors.light.neutral[50],
    overflow: 'visible',
    paddingBottom: -8,
    marginBottom: 8,
    ...Shadows.small,
  },
});
