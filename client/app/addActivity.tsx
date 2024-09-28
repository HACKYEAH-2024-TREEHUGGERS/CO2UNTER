import { View, Text, StyleSheet } from 'react-native';

export default function AddActivityScreen() {
  return (
    <View style={styles.container}>
      <Text>Add Activity</Text>
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
