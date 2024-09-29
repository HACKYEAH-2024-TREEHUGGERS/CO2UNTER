import { useUserStore } from '@/stores/user';
import { Redirect, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const status = useUserStore((state) => state.status);

  useEffect(() => {
    if (status !== 'UNKNOWN') {
      SplashScreen.hideAsync();
    }
  }, [status]);

  if (status === 'UNKNOWN') return null;

  if (status === 'NOT_EXISTING') return <Redirect href="/survey" />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
