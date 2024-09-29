import { TabBarAddButton, TabBarIcon } from '@/components/ui/tab-bar';
import { Shadows } from '@/constants/Styles';
import { router, Tabs } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreenTabsLayout() {
  const { bottom: bottomInset } = useSafeAreaInsets();

  const styles = createStyles(bottomInset, Platform.OS === 'ios');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <TabBarAddButton
        onPress={() => router.navigate('../addActivity')}
        style={styles.addButton}
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.light.green[500],
          tabBarInactiveTintColor: Colors.light.neutral[975],
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.item,
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarIcon: (props) => (
              <TabBarIcon
                {...props}
                icon={
                  props.focused ? (
                    <MaterialCommunityIcons
                      size={32}
                      name="view-grid"
                      color={props.color}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      size={32}
                      name="view-grid-outline"
                      color={props.color}
                    />
                  )
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="calculator"
          options={{
            title: '',
            tabBarIcon: (props) => (
              <TabBarIcon
                {...props}
                icon={
                  props.focused ? (
                    <MaterialCommunityIcons
                      size={32}
                      name="calculator-variant"
                      color={props.color}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      size={32}
                      name="calculator-variant-outline"
                      color={props.color}
                    />
                  )
                }
              />
            ),
            tabBarItemStyle: [styles.item, { marginRight: '10%' }],
          }}
        />
        <Tabs.Screen
          name="timeline"
          options={{
            title: '',
            tabBarIcon: (props) => (
              <TabBarIcon
                {...props}
                icon={
                  <MaterialIcons size={32} name="history" color={props.color} />
                }
              />
            ),
            tabBarItemStyle: [styles.item, { marginLeft: '10%' }],
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: '',
            tabBarIcon: (props) => (
              <TabBarIcon
                {...props}
                icon={
                  props.focused ? (
                    <MaterialIcons
                      size={32}
                      name="account-circle"
                      color={props.color}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      size={32}
                      name="account-circle-outline"
                      color={props.color}
                    />
                  )
                }
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const createStyles = (bottomInset: number, isIOS: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    addButton: {
      marginBottom: bottomInset,
      minHeight: isIOS && bottomInset ? 60 + bottomInset : 80, // don't look here
    },
    item: {
      paddingTop: isIOS && bottomInset ? 10 : 0,
      overflow: 'visible',
    },
    tabBar: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      minHeight: isIOS && bottomInset ? 0 : 80,
      ...Shadows.medium,
    },
  });
