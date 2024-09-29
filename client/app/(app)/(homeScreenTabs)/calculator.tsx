import { Colors } from '@/constants/Colors';
import { View, Text, StyleSheet } from 'react-native';

export default function CalculatorTab() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: Colors.light.neutral[900],
        }}
      >
        Kalkulator Rocznej Absorpcji
      </Text>
      <Text
        style={{
          marginTop: 'auto',
          marginBottom: 'auto',
          color: Colors.light.neutral[700],
        }}
      >
        Wkrótce dostępny!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
