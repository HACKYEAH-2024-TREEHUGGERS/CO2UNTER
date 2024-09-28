import { TabAddButton } from "@/components/TabAddButton";
import { Shadows } from "@/constants/Styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { BOTTOM_TAB_BAR_HEIGHT } from "@/constants/Layout";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreenTabsLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <TabAddButton onPress={() => console.log("Add button pressed")} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "blue",
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calculator"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="timeline"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tabBar: {
    backgroundColor: "white",
    borderTopWidth: 0,
    height: BOTTOM_TAB_BAR_HEIGHT,
    ...Shadows.medium,
  },
});
