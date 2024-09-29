import { createUser } from '@/api/user';
import { Button } from '@/components/ui/button';
import { Colors } from '@/constants/Colors';
import { useUserStore } from '@/stores/user';
import { MaterialIcons } from '@expo/vector-icons';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { TextInput, View } from 'react-native';

export default function Survey() {
  const fetchUser = useUserStore((state) => state.fetchUser);
  const { navigate } = useRouter();

  const mutation = useMutation({
    mutationFn: async (name: string) => {
      await createUser({ name });
    },
    onSuccess: async () => {
      await fetchUser();
      navigate('/(app)');
    },
  });
  const [name, setName] = useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={Colors.light.neutral[400]}
      />
      <Button
        onPress={() => {
          mutation.mutate(name);
        }}
        loading={mutation.isPending}
        icon={{
          icon: (color) => (
            <MaterialIcons name="arrow-forward" size={24} color={color} />
          ),
          position: 'right',
        }}
      >
        Dalej
      </Button>
    </View>
  );
}
