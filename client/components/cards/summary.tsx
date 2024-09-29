import { Text, View } from 'react-native';
import { Card } from '../ui/card';
import { Tabs } from '../ui/tabs';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import {
  Pie,
  type PieSliceData,
  PolarChart,
  useSlicePath,
} from 'victory-native';
import {
  Canvas,
  Circle,
  Path,
  RadialGradient,
  vec,
} from '@shopify/react-native-skia';
import { useStateColors } from '@/hooks/useStateColors';
import { StatCard } from '../ui/stat-card';
import { StatField } from '../ui/stat-field';
import { Section } from '../ui/section';

const options = [
  {
    value: 'year',
    label: 'Rok',
  },
  {
    value: 'month',
    label: 'Miesiąc',
  },
  {
    value: 'week',
    label: 'Tydzień',
  },
  {
    value: 'day',
    label: 'Dzień',
  },
];

type Option = (typeof options)[number]['value'];

export const Summary = () => {
  const [selected, setSelected] = useState<Option>('week');
  const colors = useStateColors('positive');

  return (
    <Card radius={24}>
      <View style={{ padding: 16 }}>
        <View
          style={{
            marginBottom: 16,
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
            Podsumowanie
          </Text>
          <Text
            style={{
              color: '#2E6BE5',
            }}
          >
            Więcej...
          </Text>
        </View>
        <Tabs options={options} selected={selected} onChange={setSelected} />

        <View
          style={{
            height: 256,
            marginTop: 24,
          }}
        >
          <Canvas
            style={{
              position: 'absolute',
              width: 256,
              height: 256,
              zIndex: -1,
              borderRadius: 256 / 2,
              alignSelf: 'center',
            }}
          >
            <Circle cx={256 / 2} cy={256 / 2} r={256 / 2} color='red'>
              <RadialGradient
                c={vec(256 / 2, 256 / 2)}
                r={256 / 2}
                positions={[0, 0.8]}
                colors={[colors.chartFill, `${colors.chartFill}00`]}
              />
            </Circle>
          </Canvas>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 36,
                fontWeight: '700',
                color: Colors.light.neutral[900],
              }}
            >
              171,2<Text style={{ fontSize: 24 }}>kg</Text>
            </Text>
            <Text>w tym miesiącu</Text>
          </View>
          <PolarChart
            data={DATA(colors.chart)} // 👈 specify your data
            labelKey={'label'} // 👈 specify data key for labels
            valueKey={'value'} // 👈 specify data key for values
            colorKey={'color'} // 👈 specify data key for color
          >
            <Pie.Chart
              startAngle={135}
              circleSweepDegrees={360 * 0.75}
              innerRadius={(0.95 * 256) / 2}
            >
              {({ slice }) => <MyCustomSlice slice={slice} />}
            </Pie.Chart>
          </PolarChart>
        </View>

        <Section title='Porównanie Twoich emisji'>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
            }}
          >
            <View style={{ flex: 1 }}>
              <StatCard value={0.87}>od średniego Polaka</StatCard>
            </View>
            <View style={{ flex: 1 }}>
              <StatCard value={1.13}>od średniego Europejczyka</StatCard>
            </View>
          </View>
        </Section>

        <Section title='Do absorpcji twojego śladu węglowego potrzeba'>
          {DATA_TREES.map(({ value, label, icon }) => (
            <StatField icon={icon} value={value} label={label} key={label} />
          ))}
        </Section>
      </View>
    </Card>
  );
};

const DATA = (color: string) => [
  { value: 0.6, color: Colors.light.green[500], label: 'Label 1' },
  { value: 0.4, color: Colors.light.neutral[50], label: 'Label 2' },
];

const DATA_TREES = [
  { value: 17, label: '100-letnich drzew', icon: 'nature' },
  { value: 35, label: '25-letnich drzew', icon: 'nature' },
  { value: 57, label: 'młodych drzew', icon: 'nature' },
  { value: `${5}%`, label: 'drzew w Parku Jordana', icon: 'nature-people' },
] as const;

function MyCustomSlice({ slice }: { slice: PieSliceData }) {
  // 👇 use the hook to generate a path object.
  const path = useSlicePath({ slice });
  /* 👇 experiment wtih any other customizations you want */
  return <Path path={path} color={slice.color} style='fill' />;
}
