import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='(homeScreenTabs)'
    >
      <Stack.Screen name='(homeScreenTabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='addActivity'
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
    </Stack>
  );
}
