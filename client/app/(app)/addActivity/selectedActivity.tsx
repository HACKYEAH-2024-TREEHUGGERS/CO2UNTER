import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ListButton } from '@/components/list-button';
import { Key } from 'react';

const ACTIVITY_OPTIONS: Record<
  string,
  { options: { icon: string; name: string }[]; pathname: string }
> = {
  Transport: {
    pathname: '/addActivity/addTransport',
    options: [
      {
        icon: 'directions-car',
        name: 'Volvo V50',
      },
      { icon: 'electric-scooter', name: 'Hulajka Huberta' },
    ],
  },
  Media: {
    pathname: '/addActivity/addMedia',
    options: [
      {
        icon: 'bolt',
        name: 'Sieć Elektryczna',
      },
    ],
  },
  Usługi: {
    pathname: '/addActivity/addService',
    options: [
      {
        icon: 'theaters',
        name: 'Kino',
      },
      { icon: 'tv', name: 'Streaming' },
      { icon: 'memory', name: 'ChatGPT' },
      { icon: 'bolt', name: 'Własne' },
    ],
  },
  Wydarzenie: {
    pathname: '/addActivity/addEvent',
    options: [{ icon: 'add', name: 'Dodaj Własne' }],
  },
};

export default function SelectedActivityScreen() {
  const { name } = useLocalSearchParams();

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
          onPress={router.back}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: Colors.light.neutral[900],
          }}
        >
          {`Dodaj ${name}`}
        </Text>
      </View>
      <View
        style={{
          gap: 12,
          padding: 16,
          paddingBottom: 24,
        }}
      >
        {ACTIVITY_OPTIONS[name as string].options.map((activity) => (
          <ListButton
            key={activity.name}
            icon={activity.icon}
            label={activity.name}
            onPress={() => {
              router.push({
                pathname: ACTIVITY_OPTIONS[name as string].pathname as any,
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
