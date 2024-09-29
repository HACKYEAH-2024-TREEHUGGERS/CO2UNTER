import { useUserStore } from '@/stores/user';
import { Stack } from 'expo-router';

useUserStore.getState().fetchUser();

export default function RootLayout() {
  const status = useUserStore((state) => state.status);

  if (status === 'UNKNOWN') {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={
        status === 'AUTHENTICATED' ? '(homeScreenTabs)' : 'survey'
      }
    />
  );
}
