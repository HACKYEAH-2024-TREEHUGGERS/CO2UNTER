import { Timeframe } from '@/stores/dashboard';
import { ky } from './ky';
import { DashboardResponse } from './schema';
import { generateOrGetSecureId } from './user';

export const getDashboard = async (timeframe: Timeframe) => {
  const id = await generateOrGetSecureId();

  try {
    const response = await ky
      .get(`users/${id}/dashboard`, {
        searchParams: {
          timeframe,
        },
      })
      .json();

    return DashboardResponse.parse(response);
  } catch (error) {
    throw error;
  }
};
