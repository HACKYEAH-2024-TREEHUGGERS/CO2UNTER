import { useSurveyStore } from '@/stores/survey';
import { Redirect, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export default function AppLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  const currentQuestionIndex = useSurveyStore((state) => state.currentQuestion);

  if (!currentQuestionIndex) {
    return <Redirect href="/survey" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="/(homeScreenTabs)"
    >
      <Stack.Screen
        name="addActivity"
        options={{
          headerShown: false,
          animation: 'slide_from_bottom',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
