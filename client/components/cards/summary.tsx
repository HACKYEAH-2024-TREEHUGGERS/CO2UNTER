import { Text, View } from "react-native";
import { Card } from "../ui/card";
import { Tabs } from "../ui/tabs";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import {
  Pie,
  type PieSliceData,
  PolarChart,
  useSlicePath,
} from "victory-native";
import {
  Canvas,
  Circle,
  Path,
  RadialGradient,
  vec,
} from "@shopify/react-native-skia";

const options = [
  {
    value: "year",
    label: "Rok",
  },
  {
    value: "month",
    label: "Miesiąc",
  },
  {
    value: "week",
    label: "Tydzień",
  },
  {
    value: "day",
    label: "Dzień",
  },
];

type Option = (typeof options)[number]["value"];

export const Summary = () => {
  const [selected, setSelected] = useState<Option>("week");

  return (
    <Card offset={48} radius={24}>
      <View style={{ padding: 16 }}>
        <View
          style={{
            marginBottom: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
              color: "#2E6BE5",
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
              position: "absolute",
              width: 256,
              height: 256,
              zIndex: -1,
              borderRadius: 256 / 2,
              alignSelf: "center",
            }}
          >
            <Circle cx={256 / 2} cy={256 / 2} r={256 / 2} color="red">
              <RadialGradient
                c={vec(256 / 2, 256 / 2)}
                r={256 / 2}
                positions={[0, 0.8]}
                colors={[
                  Colors.light.green[200],
                  `${Colors.light.green[200]}00`,
                ]}
              />
            </Circle>
          </Canvas>
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 36,
                fontWeight: "600",
                color: Colors.light.neutral[900],
              }}
            >
              171,2
            </Text>
          </View>
          <PolarChart
            data={DATA} // 👈 specify your data
            labelKey={"label"} // 👈 specify data key for labels
            valueKey={"value"} // 👈 specify data key for values
            colorKey={"color"} // 👈 specify data key for color
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
        <Text
          style={{
            fontWeight: "500",
          }}
        >
          Porównanie Twoich emisji
        </Text>
      </View>
    </Card>
  );
};

const DATA = [
  { value: 0.6, color: Colors.light.green[500], label: "Label 1" },
  { value: 0.4, color: Colors.light.neutral[50], label: "Label 2" },
];

function MyCustomSlice({ slice }: { slice: PieSliceData }) {
  // 👇 use the hook to generate a path object.
  const path = useSlicePath({ slice });
  /* 👇 experiment wtih any other customizations you want */
  return <Path path={path} color={slice.color} style="fill" />;
}
