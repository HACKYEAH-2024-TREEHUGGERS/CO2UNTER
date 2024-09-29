import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'framer-motion';

export const SERVICES = [
  {
    label: 'Hotele',
    value: 'hotels',
    icon: (color: string) => (
      <MaterialIcons name="bed" size={24} color={color} />
    ),
  },
  {
    label: 'Streaming Wideo',
    value: 'video_streaming',
    icon: (color: string) => (
      <MaterialIcons name="ondemand-video" size={24} color={color} />
    ),
  },
];
