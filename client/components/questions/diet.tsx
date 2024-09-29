import { Colors } from '@/constants/Colors';
import { useSurveyStore } from '@/stores/survey';
import { Text, View } from 'react-native';
import { Field } from '../ui/field';
import { ListSelect } from '../ui/list-select';
import { DIETS } from '@/data/diets';

const ID = 'diet';

export const Diet = () => {
  const skip = useSurveyStore((state) => state.nextQuestion);
  const value = useSurveyStore((state) => state.answers[ID]) as {
    calories: string;
    diet: string;
  };
  const setValue = useSurveyStore((state) => state.setAnswer);

  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          marginLeft: 'auto',
          color: Colors.light.green[700],
        }}
        onPress={skip}
      >
        Pomiń
      </Text>
      <Text
        style={{
          color: Colors.light.neutral[600],
          fontSize: 16,
          marginVertical: 16,
        }}
      >
        Jakie są twoje nawyki żywieniowe?
      </Text>
      <View
        style={{
          alignSelf: 'stretch',
        }}
      >
        <Field
          label="Dzienne zapotrzebowanie kaloryczne"
          keyboardType="numeric"
          value={value?.calories}
          onChangeText={(calories) => setValue(ID, { ...value, calories })}
          suffix="kcal"
        />
      </View>
      <View
        style={{
          marginTop: 16,
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        <ListSelect
          options={DIETS}
          selected={[value?.diet]}
          onChange={(option) => {
            setValue(ID, { ...value, diet: option });
          }}
          title="Dieta"
        />
      </View>
    </View>
  );
};
