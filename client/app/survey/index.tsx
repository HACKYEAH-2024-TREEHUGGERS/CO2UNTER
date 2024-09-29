import { createUser } from '@/api/user';
import { useUserStore } from '@/stores/user';
import { useMutation } from '@tanstack/react-query';
import { Redirect, useRouter } from 'expo-router';

export default function Survey() {
  return <Redirect href="/survey/page" />;
}
