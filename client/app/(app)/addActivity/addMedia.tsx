import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { StatField } from '@/components/ui/stat-field';
import { Field } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { ListSelect } from '@/components/ui/list-select';
import { useState } from 'react';

export default function addMediaScreen() {
  const { name, icon } = useLocalSearchParams();
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('0');
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View
        style={{
          alignItems: 'center',
          marginVertical: 16,
        }}
      >
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={Colors.light.neutral[900]}
          style={{ position: 'absolute', left: 24 }}
          onPress={router.back}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: Colors.light.neutral[900],
          }}
        >
          Dodaj Media
        </Text>
      </View>
      <View
        style={{
          gap: 12,
          padding: 16,
          paddingBottom: 24,
        }}
      >
        <StatField
          value={name as any}
          icon={icon as any}
          valueTextSize="small"
        />
        <ListSelect
          title="Okres"
          options={[
            { value: '0', label: 'Poprzedni miesiąc', icon: () => null },
            { value: '1', label: 'Poprzedni tydzień', icon: () => null },
            { value: '2', label: 'Jeden dzień', icon: () => null },
          ]}
          selected={input2 as any}
          onChange={setInput2}
        />
        <Field
          label="Energia"
          value={input}
          onChangeText={setInput}
          suffix="kWh"
        />
        <Button
          loading={loading}
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              router.dismissAll();
            }, 3000);
          }}
        >
          Dodaj
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.neutral[0],
  },
});
