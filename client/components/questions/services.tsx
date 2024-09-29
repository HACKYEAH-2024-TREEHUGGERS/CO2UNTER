import { SERVICES } from '@/data/services';
import { useSurveyStore } from '@/stores/survey';
import { Text, View } from 'react-native';

const ID = 'services';

export const Services = () => {
  const skip = useSurveyStore((state) => state.nextQuestion);
  const value = (useSurveyStore((state) => state.answers[ID]) ??
    []) as string[];
  const setValue = useSurveyStore((state) => state.setAnswer);

  return (
    <View
      style={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 12,
      }}
    >
      {SERVICES.map((service) => {
        const active = value.includes(service.value);

        return (
          <View key={service.value}>
            <Text>{service.label}</Text>
          </View>
        );
      })}
    </View>
  );
};
