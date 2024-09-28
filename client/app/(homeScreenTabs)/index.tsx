import { Card } from "@/components/ui/card";
import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: Colors.light.neutral[500],
          }}
        >
          Cześć,
        </Text>
        <Text
          style={{
            color: Colors.light.neutral[900],
            fontWeight: 500,
            fontSize: 24,
          }}
        >
          {"{name}"}
        </Text>
      </View>
      <View
        style={{
          marginTop: -24,
        }}
      >
        <Card offset={48} radius={24}>
          <View style={{ padding: 16 }}>
            <Text
              style={{
                color: Colors.light.neutral[900],
                fontWeight: 500,
                fontSize: 20,
              }}
            >
              Twoje Emisje CO₂
            </Text>
          </View>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "white",
    flex: 1,
  },
});
