import { Summary } from "@/components/cards/summary";
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text>Dashboard</Text>
      </View>
      <View
        style={{
          marginTop: -48,
        }}
      >
        <Summary />
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
