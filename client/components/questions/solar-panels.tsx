import { Colors } from '@/constants/Colors';
import { useSurveyStore } from '@/stores/survey';
import { Text, View } from 'react-native';
import { ListSelect } from '../ui/list-select';
import { MaterialIcons } from '@expo/vector-icons';

const ID = 'solar-panels';

export const SolarPanels = () => {
  const skip = useSurveyStore((state) => state.nextQuestion);
  const value = useSurveyStore((state) => state.answers[ID]) as string;
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
        Czy posiadasz panele słoneczne?
      </Text>
      <ListSelect
        options={[
          {
            label: 'Tak',
            value: '1',
            icon: () => (
              <MaterialIcons
                name="solar-power"
                size={24}
                color={
                  value === '1'
                    ? Colors.light.green[700]
                    : Colors.light.neutral[500]
                }
              />
            ),
          },
          {
            label: 'Nie',
            value: '0',
            icon: () => (
              <MaterialIcons
                name="cancel"
                size={24}
                color={
                  value === '0'
                    ? Colors.light.green[700]
                    : Colors.light.neutral[500]
                }
              />
            ),
          },
        ]}
        title=""
        selected={[(value as '0' | '1') ?? ('0' as const)]}
        onChange={(value) => {
          setValue(ID, value);
        }}
      />
    </View>
  );
};
