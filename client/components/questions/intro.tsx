import { Colors } from '@/constants/Colors';
import { Text, View } from 'react-native';
import { Field } from '../ui/field';
import { useSurveyStore } from '@/stores/survey';

const ID = 'intro';

export const IntroQuestion = () => {
  const setAnswer = useSurveyStore((state) => state.setAnswer);
  const value = useSurveyStore((state) => state.answers[ID]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 32,
          color: Colors.light.neutral[900],
          fontWeight: '600',
          marginBottom: 10,
        }}
      >
        Cześć!
      </Text>
      <Text
        style={{
          color: Colors.light.neutral[500],
          fontWeight: '500',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 16,
        }}
      >
        Aby podstawowe funkcje aplikacji mogły poprawnie działać, potrzebujemy
        od Ciebie kilku kluczowych informacji.
      </Text>
      <View style={{ alignSelf: 'stretch' }}>
        <Field
          label="Imię"
          value={value}
          onChangeText={(value) => {
            setAnswer(ID, value);
          }}
        />
      </View>
    </View>
  );
};
