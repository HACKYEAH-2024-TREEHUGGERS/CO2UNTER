import { Diet } from '@/components/cards/diet';
import { Media } from '@/components/cards/media';
import { Summary } from '@/components/cards/summary';
import { Transport } from '@/components/cards/transport';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Tab() {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          marginVertical: 16,
        }}
      >
        <Text>Dashboard</Text>
      </View>
      <View
        style={{
          gap: 24,
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <Summary />
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
