import { Colors } from '@/constants/Colors';
import { VEHICLES } from '@/data/vehicles';
import { useSurveyStore } from '@/stores/survey';
import { ScrollView, Text, View } from 'react-native';
import { Field } from '../ui/field';
import { ListSelect } from '../ui/list-select';

const ID = 'vehicles-details';

export const VehiclesDetails = () => {
  const skip = useSurveyStore((state) => state.nextQuestion);
  const value = (useSurveyStore((state) => state.answers[ID]) ??
    []) as string[];
  const setValue = useSurveyStore((state) => state.setAnswer);
  const selectedVehicles = useSurveyStore(
    (state) => state.answers['vehicles']
  ) as string[];

  const vehicles = VEHICLES.filter((vehicle) =>
    selectedVehicles.includes(vehicle.value)
  );

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
        Podaj więcej informacji na temat wybranych pojazdów.
      </Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          gap: 32,
          paddingBottom: 32,
        }}
      >
        {vehicles.map((vehicle) => (
          <Item key={vehicle.value} vehicle={vehicle} />
        ))}
      </ScrollView>
    </>
  );
};

const Item = ({ vehicle }: { vehicle: (typeof VEHICLES)[number] }) => {
  const fieldSet = useFieldSet({ vehicle });

  return (
    <View
      style={{
        gap: 8,
      }}
    >
      <View
        style={{
          padding: 12,
          backgroundColor: Colors.light.neutral[50],
          borderRadius: 8,
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}
      >
        {vehicle.icon(Colors.light.neutral[500])}
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: Colors.light.neutral[900],
          }}
        >
          {vehicle.label}
        </Text>
      </View>
      {fieldSet}
    </View>
  );
};

const useFieldSet = ({ vehicle }: { vehicle: (typeof VEHICLES)[number] }) => {
  const value = useSurveyStore((state) => state.answers[ID]) as Record<
    string,
    any
  >;
  const setValue = useSurveyStore((state) => state.setAnswer);

  let type;
  switch (true) {
    case ['car', 'motorcycle'].includes(vehicle.value):
      type = 'fuel' as const;
      break;
    case ['public_transport'].includes(vehicle.value):
      type = 'public_transport' as const;
      break;
    default:
      type = 'electric' as const;
  }

  return (
    <View style={{ gap: 8 }}>
      <Field
        label="Nazwa"
        value={value?.[vehicle.value]?.name}
        onChangeText={(name) =>
          setValue(ID, {
            ...value,
            [vehicle.value]: {
              ...value?.[vehicle.value],
              name,
            },
          })
        }
      />
      {type === 'fuel' && (
        <ListSelect
          title="Rodzaj paliwa"
          options={[
            { value: 'petrol', label: 'Benzyna', icon: () => null },
            { value: 'diesel', label: 'Diesel', icon: () => null },
            { value: 'lpg', label: 'LPG', icon: () => null },
          ]}
          selected={[value?.[vehicle.value]?.fuel]}
          onChange={(fuel) =>
            setValue(ID, {
              ...value,
              [vehicle.value]: {
                ...value?.[vehicle.value],
                fuel,
              },
            })
          }
        />
      )}
      {type === 'fuel' && (
        <Field
          label="Średnie zużycie paliwa"
          suffix="l/100km"
          keyboardType="numeric"
          value={value?.[vehicle.value]?.consumption}
          onChangeText={(consumption) =>
            setValue(ID, {
              ...value,
              [vehicle.value]: {
                ...value?.[vehicle.value],
                consumption,
              },
            })
          }
        />
      )}
      {type === 'public_transport' && (
        <Field
          label="Ilość przejechanych kilometrów"
          suffix="km"
          keyboardType="numeric"
          value={value?.[vehicle.value]?.distance}
          onChangeText={(distance) =>
            setValue(ID, {
              ...value,
              [vehicle.value]: {
                ...value?.[vehicle.value],
                distance,
              },
            })
          }
        />
      )}
      {type === 'electric' && (
        <Field
          label="Średnie zużycie energii"
          suffix="Wh/km"
          keyboardType="numeric"
          value={value?.[vehicle.value]?.consumption}
          onChangeText={(consumption) =>
            setValue(ID, {
              ...value,
              [vehicle.value]: {
                ...value?.[vehicle.value],
                consumption,
              },
            })
          }
        />
      )}
    </View>
  );
};
