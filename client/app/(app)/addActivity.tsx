import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';

export default function AddActivityScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
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
          Dodaj Aktywność
        </Text>
      </View>
      <View
        style={{
          gap: 24,
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.neutral[0],
  },
});
