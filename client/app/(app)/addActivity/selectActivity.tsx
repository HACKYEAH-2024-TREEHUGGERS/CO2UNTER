import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ListButton } from '@/components/list-button';

const ACTIVITIES = [
  {
    name: 'Transport',
    icon: 'directions-car',
  },
  {
    name: 'Media',
    icon: 'bolt',
  },
  {
    name: 'Usługi',
    icon: 'theaters',
  },
  {
    name: 'Wydarzenie',
    icon: 'confirmation-number',
  },
] as const;

export default function AddActivityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View
        style={{
          alignItems: 'center',
          marginVertical: 16,
        }}
      >
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={Colors.light.neutral[900]}
          style={{ position: 'absolute', left: 24 }}
          onPress={() => router.navigate('/(app)/(homeScreenTabs)')}
        />
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
          gap: 12,
          padding: 16,
          paddingBottom: 24,
        }}
      >
        {ACTIVITIES.map((activity) => (
          <ListButton
            key={activity.name}
            icon={activity.icon}
            label={activity.name}
            onPress={() => {
              router.push({
                pathname: '/addActivity/selectedActivity',
                params: activity,
              });
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.neutral[0],
  },
});
