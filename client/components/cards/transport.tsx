import { Text, View } from 'react-native';
import { Card } from '../ui/card';
import { Colors } from '@/constants/Colors';
import { Section } from '../ui/section';
import { Attribute, StatField, StatFieldIcon } from '../ui/stat-field';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const DATA_TRANSPORT = {
  cars: [
    {
      value: 'Volvo V50',
      label: 'Olej Napedowy',
      icon: 'directions-car' as StatFieldIcon,
      attributes: [
        { value: 172, unit: 'g', label: 'CO₂/km' },
        { value: 2786, unit: 'km', label: 'zapisane' },
        { value: '479,2', unit: 'kg', label: 'emisji CO₂' },
      ],
    },
    {
      value: 'Honda Civic',
      label: 'Benzyna',
      icon: 'directions-car' as StatFieldIcon,
      attributes: [
        { value: 190, unit: 'g', label: 'CO₂/km' },
        { value: 3791, unit: 'km', label: 'zapisane' },
        { value: '720,3', unit: 'kg', label: 'emisji CO₂' },
      ],
    },
  ],
  other: [
    {
      value: 'Yamaha MT-07',
      label: 'Benzyna',
      icon: 'two-wheeler' as StatFieldIcon,
      attributes: [
        { value: 98, unit: 'g', label: 'CO₂/km' },
        { value: 575, unit: 'km', label: 'zapisane' },
        { value: '55,7', unit: 'kg', label: 'emisji CO₂' },
      ],
    },
    {
      value: 'Hulajnoga',
      label: 'Elektryczna',
      icon: 'electric-scooter' as StatFieldIcon,
      attributes: [
        { value: '8,4', unit: 'g', label: 'CO₂/km' },
        { value: 76, unit: 'km', label: 'zapisane' },
        { value: '638,4', unit: 'g', label: 'emisji CO₂' },
      ],
    },
    {
      value: 'Komunikacja Miejska',
      label: undefined,
      icon: 'directions-bus' as StatFieldIcon,
      attributes: [
        { value: '8,4', unit: 'g', label: 'CO₂/km' },
        { value: 76, unit: 'km', label: 'zapisane' },
        { value: '638,4', unit: 'g', label: 'emisji CO₂' },
      ],
    },
    {
      value: 'Rower',
      label: 'Bezemisyjny',
      icon: 'directions-bike' as StatFieldIcon,
      attributes: [
        { value: 0, unit: 'g', label: 'CO₂/km' },
        { value: 761, unit: 'km', label: 'zapisane' },
        { value: '909,6', unit: 'kg', label: 'emisji CO₂ mniej' },
      ],
      green: true,
    },
  ],
};

export const Transport = () => {
  return (
    <Card radius={24}>
      <View style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.light.neutral[900],
              fontWeight: 500,
              fontSize: 20,
            }}
          >
            Transport
          </Text>
          <Text
            style={{
              color: '#2E6BE5',
            }}
          >
            Edytuj
          </Text>
        </View>
        <Section title='Samochody'>
          {DATA_TRANSPORT.cars.map(({ value, label, icon, attributes }) => (
            <StatField
              icon={icon}
              value={value}
              valueTextSize='small'
              label={label}
              key={label}
              attributes={attributes as [Attribute, Attribute, Attribute]}
            />
          ))}
        </Section>

        <Section title='Inne'>
          {DATA_TRANSPORT.other.map(
            ({ value, label, icon, attributes, green }) => (
              <StatField
                icon={icon}
                value={value}
                valueTextSize='small'
                label={label}
                key={label}
                attributes={attributes as [Attribute, Attribute, Attribute]}
                green={green}
              />
            )
          )}
        </Section>
      </View>
    </Card>
  );
};
