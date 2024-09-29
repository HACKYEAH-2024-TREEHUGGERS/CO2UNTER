import { getDashboard } from '@/api/dashboard';
import { Diet } from '@/components/cards/diet';
import { Media } from '@/components/cards/media';
import { Summary } from '@/components/cards/summary';
import { Transport } from '@/components/cards/transport';
import { Colors } from '@/constants/Colors';
import { useDashboardStore } from '@/stores/dashboard';
import { useQuery } from '@tanstack/react-query';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

export default function Tab() {
  const timeframe = useDashboardStore((state) => state.timeframe);
  const { data: dashboard, error } = useQuery({
    queryKey: ['dashboard', timeframe],
    queryFn: async () => {
      return getDashboard(timeframe);
    },
  });

  if (!dashboard)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color={Colors.light.green[700]} />
      </View>
    );

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
          Dashboard
        </Text>
      </View>
      <View
        style={{
          gap: 24,
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <Summary dashboard={dashboard} />
        <Transport />
        <Diet />
        <Media />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
