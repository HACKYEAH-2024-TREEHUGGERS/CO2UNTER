import { Diet } from '@/components/cards/diet';
import { Media } from '@/components/cards/media';
import { Summary } from '@/components/cards/summary';
import { Transport } from '@/components/cards/transport';
import { Card } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <Text>Dashboard</Text>
      </View>
      <View
        style={{
          gap: 24,
        }}
      >
        <Summary />
        <Transport />
        <Diet />
        <Media />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flex: 1,
  },
});
