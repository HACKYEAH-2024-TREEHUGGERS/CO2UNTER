import { Text, View } from 'react-native';
import { Card } from '../../ui/card';
import { Colors } from '@/constants/Colors';
import { DietDetails } from './details';
import { MaterialIcons } from '@expo/vector-icons';

export const Diet = () => {
  return (
    <Card radius={24}>
      <View style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
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
        <DietDetails
          icon={(color) => (
            <MaterialIcons color={color} size={24} name="restaurant" />
          )}
          name="Wszystkożerców"
        />
      </View>
    </Card>
  );
};
