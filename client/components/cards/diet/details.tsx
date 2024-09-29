import { Colors } from '@/constants/Colors';
import { useStateColors } from '@/hooks/useStateColors';
import { Text, View } from 'react-native';

type Props = {
  icon: (color: string) => React.ReactNode;
  name: string;
};

export const DietDetails = ({ icon, name }: Props) => {
  const colors = useStateColors('neutral');

  return (
    <View
      style={{
        backgroundColor: colors.card,
        padding: 12,
        borderRadius: 8,
        gap: 12,
      }}
    >
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        {icon(colors.title)}
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: colors.title,
          }}
        >
          Wszystkożerców
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: Colors.light.neutral[100],
        }}
      />
      <Section value={2.23} unit="g" details="CO₂/1000kcal" />
      <Section value={2035} unit="kg" details="emisji CO₂ rocznie" />
    </View>
  );
};

const Section = ({
  details,
  unit,
  value,
}: {
  value: number;
  unit: string;
  details: string;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: Colors.light.neutral[900],
        }}
      >
        {value}
        <Text
          style={{
            fontSize: 12,
            color: Colors.light.neutral[500],
          }}
        >
          {unit}
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: Colors.light.neutral[500],
        }}
      >
        {details}
      </Text>
    </View>
  );
};
