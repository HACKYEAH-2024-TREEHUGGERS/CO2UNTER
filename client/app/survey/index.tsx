import { createUser } from '@/api/user';
import { useUserStore } from '@/stores/user';
import { useMutation } from '@tanstack/react-query';
import { Redirect, useRouter } from 'expo-router';

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

  return <Redirect href="/survey/page" />;
}
