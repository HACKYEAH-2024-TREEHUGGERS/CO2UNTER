import { z } from 'zod';

export const DashboardResponse = z.object({
  jordan_trees_percentage: z.number(),
  trees: z.object({
    adult: z.number(),
    medium: z.number(),
    small: z.number(),
  }),
  country_emission_per_timeline: z.object({
    eu: z.number(),
    poland: z.number(),
  }),
  summary: z.number(),
});

export type Dashboard = z.infer<typeof DashboardResponse>;
