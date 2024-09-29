import { Colors } from '@/constants/Colors';
import { SERVICES } from '@/data/services';
import { useSurveyStore } from '@/stores/survey';
import { Pressable, Text, View } from 'react-native';

const ID = 'services';

export const Services = () => {
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
    <>
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
          marginVertical: 16,
          color: Colors.light.neutral[700],
          fontWeight: '500',
          textAlign: 'center',
        }}
      >
        Z których z tych usług korzystasz?
      </Text>
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
            <Pressable
              key={service.value}
              onPress={() => handleChange(service.value)}
              style={{
                padding: 12,
                borderWidth: 1,
                borderColor: Colors.light.neutral[200],
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                ...(active && {
                  backgroundColor: Colors.light.green[50],
                }),
              }}
            >
              {service.icon(
                active ? Colors.light.green[900] : Colors.light.neutral[700]
              )}
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: active
                    ? Colors.light.green[900]
                    : Colors.light.neutral[700],
                }}
              >
                {service.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </>
  );
};
