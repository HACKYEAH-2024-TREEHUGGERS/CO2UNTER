import { View, Text, StyleSheet } from 'react-native';

export default function CalculatorTab() {
  return (
    <View style={styles.container}>
      <Text>Calculator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
