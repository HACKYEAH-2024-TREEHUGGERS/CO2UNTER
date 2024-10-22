import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ky } from './ky';
import { HTTPError } from 'ky';

export const generateOrGetSecureId = async () => {
  const deviceId = await SecureStore.getItemAsync('deviceId');
  if (deviceId) return JSON.parse(deviceId);
  const newDeviceId = uuidv4();
  await SecureStore.setItemAsync('deviceId', JSON.stringify(newDeviceId));

  return newDeviceId;
};

export const getUser = async () => {
  const id = await generateOrGetSecureId();

  try {
    const data = await ky.get(`users/${id}/`).json();

    return data;
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      return null;
    }

    throw error;
  }
};

export const createUser = async ({ name }: { name: string }) => {
  const id = await generateOrGetSecureId();

  try {
    await ky.post('users/', {
      json: {
        device_id: id,
        name,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
