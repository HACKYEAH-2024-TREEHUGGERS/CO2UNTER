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
import { Dashboard } from '@/api/schema';
import { Timeframe, useDashboardStore } from '@/stores/dashboard';

const options: { value: Timeframe; label: string }[] = [
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

type Props = {
  dashboard: Dashboard;
};

export const Summary = ({ dashboard }: Props) => {
  const setTimeframe = useDashboardStore((state) => state.setTimeframe);
  const timeframe = useDashboardStore((state) => state.timeframe);

  const { eu, poland } = dashboard.country_emission_per_timeline;

  const percentagePoland = (dashboard.summary - poland) / poland;
  const percentageEU = (dashboard.summary - eu) / eu;

  const colors = useStateColors(percentagePoland < 1 ? 'positive' : 'negative');

  const label = (() => {
    switch (timeframe) {
      case 'year':
        return 'w tym roku';
      case 'month':
        return 'w tym miesiącu';
      case 'week':
        return 'w tym tygodniu';
      case 'day':
        return 'dzisiaj';
    }
  })();

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
        <Tabs options={options} selected={timeframe} onChange={setTimeframe} />

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
            <Circle cx={256 / 2} cy={256 / 2} r={256 / 2} color="red">
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
              {dashboard.summary}
              <Text style={{ fontSize: 24 }}>kg</Text>
            </Text>
            <Text>{label}</Text>
          </View>
          <PolarChart
            data={DATA(colors.chart)}
            labelKey={'label'}
            valueKey={'value'}
            colorKey={'color'}
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

        <Section title="Porównanie Twoich emisji">
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
            }}
          >
            <View style={{ flex: 1 }}>
              <StatCard value={percentagePoland}>od średniego Polaka</StatCard>
            </View>
            <View style={{ flex: 1 }}>
              <StatCard value={percentageEU}>
                od średniego Europejczyka
              </StatCard>
            </View>
          </View>
        </Section>

        <Section title="Do absorpcji twojego śladu węglowego potrzeba">
          <StatField
            icon="nature"
            value={dashboard.trees.adult}
            label="100-letnich drzew"
          />
          <StatField
            icon="nature"
            value={dashboard.trees.medium}
            label="25-letnich drzew"
          />
          <StatField
            icon="nature"
            value={dashboard.trees.small}
            label="młodych drzew"
          />
          <StatField
            icon="nature-people"
            value={`${dashboard.jordan_trees_percentage.toFixed(2)}%`}
            label="drzew w Parku Jordana"
          />
        </Section>
      </View>
    </Card>
  );
};

const DATA = (color: string) => [
  { value: 0.6, color, label: 'Label 1' },
  { value: 0.4, color: Colors.light.neutral[50], label: 'Label 2' },
];

function MyCustomSlice({ slice }: { slice: PieSliceData }) {
  const path = useSlicePath({ slice });
  return <Path path={path} color={slice.color} style="fill" />;
}
