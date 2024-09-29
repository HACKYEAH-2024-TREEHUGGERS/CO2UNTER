import { Colors } from '@/constants/Colors';
import { useSurveyStore } from '@/stores/survey';
import { Text, View } from 'react-native';
import { ListSelect } from '../ui/list-select';
import { VEHICLES } from '@/data/vehicles';

const ID = 'vehicles';

export const Vehicles = () => {
  const skip = useSurveyStore((state) => state.nextQuestion);
  const value = (useSurveyStore((state) => state.answers[ID]) ??
    []) as string[];
  const setValue = useSurveyStore((state) => state.setAnswer);

  const handleChange = (selected: string) => {
    if (value.includes(selected)) {
      setValue(
        ID,
        value.filter((v) => v !== selected)
      );
    } else {
      setValue(ID, [...value, selected]);
    }
  };

  return (
    <View>
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
          fontSize: 16,
          color: Colors.light.neutral[700],
          textAlign: 'center',
          marginVertical: 16,
        }}
      >
        Z jakiej formy transportu korzystasz?{'\n'}Możesz wybrać kilka.
      </Text>
      <ListSelect
        title="Pojazdy"
        options={VEHICLES}
        selected={value ?? []}
        onChange={handleChange}
      />
    </View>
  );
};
