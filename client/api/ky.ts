import kyBase from 'ky';

export const ky = kyBase.extend({
  prefixUrl: process.env.EXPO_PUBLIC_API_URL,
});
