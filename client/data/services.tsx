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
  {
    label: 'Kino',
    value: 'cinema',
    icon: (color: string) => (
      <MaterialIcons name="local-movies" size={24} color={color} />
    ),
  },
  {
    label: 'Streaming Audio',
    value: 'audio_streaming',
    icon: (color: string) => (
      <MaterialIcons name="audiotrack" size={24} color={color} />
    ),
  },
  {
    label: 'Czat AI',
    value: 'ai_chat',
    icon: (color: string) => (
      <MaterialIcons name="memory" size={24} color={color} />
    ),
  },
  {
    label: 'Gry Online',
    value: 'online_games',
    icon: (color: string) => (
      <MaterialIcons name="sports-esports" size={24} color={color} />
    ),
  },
  {
    label: 'Przesyłki Kurierskie',
    value: 'courier',
    icon: (color: string) => (
      <MaterialIcons name="local-shipping" size={24} color={color} />
    ),
  },
  {
    label: 'Siłownie',
    value: 'gyms',
    icon: (color: string) => (
      <MaterialIcons name="fitness-center" size={24} color={color} />
    ),
  },
  {
    label: 'Obrazy AI',
    value: 'ai_images',
    icon: (color: string) => (
      <MaterialIcons name="image" size={24} color={color} />
    ),
  },
  {
    label: 'Usługi w chmurze',
    value: 'cloud_services',
    icon: (color: string) => (
      <MaterialIcons name="cloud" size={24} color={color} />
    ),
  },
  {
    label: 'Restauracje',
    value: 'restaurants',
    icon: (color: string) => (
      <MaterialIcons name="restaurant" size={24} color={color} />
    ),
  },
];
