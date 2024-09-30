import { createUser } from '@/api/user';
import { Diet } from '@/components/questions/diet';
import { IntroQuestion } from '@/components/questions/intro';
import { Services } from '@/components/questions/services';
import { SolarPanels } from '@/components/questions/solar-panels';
import { Vehicles } from '@/components/questions/vehicles';
import { VehiclesDetails } from '@/components/questions/vehicles-details';
import { Button } from '@/components/ui/button';
import { useSurveyStore } from '@/stores/survey';
import { useUserStore } from '@/stores/user';
import { useMutation } from '@tanstack/react-query';
import { router, useRouter } from 'expo-router';
import { View } from 'react-native';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type QueueEntry = {
  id: string;
  component: () => JSX.Element;
  if?: (answers: Record<string, any>) => boolean;
};

const QUEUE: QueueEntry[] = [
  {
    id: 'intro',
    component: IntroQuestion,
  },
  {
    id: 'diet',
    component: Diet,
  },
  {
    id: 'vehicles',
    component: Vehicles,
  },
  {
    id: 'vehicles-details',
    component: VehiclesDetails,
    if: (answers) => {
      return answers['vehicles']?.length > 0;
    },
  },
  {
    id: 'services',
    component: Services,
  },
  {
    id: 'solar-panels',
    component: SolarPanels,
  },
];

export default function SurveyPage() {
  const { bottom, top } = useSafeAreaInsets();
  const currentQuestionIndex = useSurveyStore((state) => state.currentQuestion);
  const nextQuestion = useSurveyStore((state) => state.nextQuestion);
  const previousQuestion = useSurveyStore((state) => state.prevQuestion);
  const answers = useSurveyStore((state) => state.answers);

  const fetchUser = useUserStore((state) => state.fetchUser);
  const { navigate } = useRouter();

  const mutation = useMutation({
    mutationFn: async (name: string) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await createUser({ name });
    },
    onSuccess: async () => {
      await fetchUser();
      navigate('/(app)');
    },
  });

  const filteredQueue = QUEUE.filter((entry) => {
    if (entry.if) {
      return entry.if(answers);
    }
    return true;
  });

  const hasNextQuestion = currentQuestionIndex <= filteredQueue.length - 1;
  const hasPreviousQuestion = currentQuestionIndex > 0;

  const handleNext = () => {
    if (hasNextQuestion) {
      nextQuestion();
    }
  };

  const handlePrevious = () => {
    if (hasPreviousQuestion) {
      previousQuestion();
    }
  };

  const handleFinish = async () => {
    router.replace('/(homeScreenTabs)');
  };

  const { component: Comp, id } = QUEUE[currentQuestionIndex];

  return (
    <View
      style={{
        flex: 1,
        paddingTop: top || 24,
        paddingBottom: bottom || 24,
        backgroundColor: 'white',
        paddingHorizontal: 16,
      }}
    >
      <Animated.View
        key={currentQuestionIndex}
        entering={FadeInRight}
        exiting={FadeOutLeft}
        style={{ flex: 1 }}
      >
        <Comp />
      </Animated.View>
      <View style={{ marginTop: 'auto', flexDirection: 'row', gap: 10 }}>
        {hasPreviousQuestion && (
          <View style={{ flex: 1 }}>
            <Button
              variant="secondary"
              onPress={handlePrevious}
              loading={mutation.isPending}
            >
              Cofnij
            </Button>
          </View>
        )}
        {hasNextQuestion && (
          <View style={{ flex: 1 }}>
            <Button onPress={handleNext}>
              {hasPreviousQuestion ? 'Dalej' : 'Rozpocznij'}
            </Button>
          </View>
        )}
        {!hasNextQuestion && (
          <View style={{ flex: 1 }}>
            <Button loading={mutation.isPending} onPress={handleFinish}>
              Zakończ
            </Button>
          </View>
        )}
      </View>
    </View>
  );
}
