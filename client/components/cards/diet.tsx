import { Text, View } from 'react-native';
import { Card } from '../ui/card';
import { Colors } from '@/constants/Colors';

export const Diet = () => {
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
            Dieta
          </Text>
          <Text
            style={{
              color: '#2E6BE5',
            }}
          >
            Więcej...
          </Text>
        </View>
      </View>
    </Card>
  );
};
