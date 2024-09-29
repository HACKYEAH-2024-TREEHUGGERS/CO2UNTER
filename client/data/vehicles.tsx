import { MaterialIcons } from '@expo/vector-icons';

export const VEHICLES = [
  {
    label: 'Samochód',
    value: 'car',
    icon: (color: string) => (
      <MaterialIcons name="directions-car" size={24} color={color} />
    ),
  },
  {
    label: 'Samochód elektryczny',
    value: 'electric_car',
    icon: (color: string) => (
      <MaterialIcons name="electric-car" size={24} color={color} />
    ),
  },
  {
    label: 'Motocykl',
    value: 'motorcycle',
    icon: (color: string) => (
      <MaterialIcons name="two-wheeler" size={24} color={color} />
    ),
  },
  {
    label: 'Hulajnoga Elektryczna',
    value: 'electric_scooter',
    icon: (color: string) => (
      <MaterialIcons name="electric-scooter" size={24} color={color} />
    ),
  },
  {
    label: 'Rower',
    value: 'bike',
    icon: (color: string) => (
      <MaterialIcons name="pedal-bike" size={24} color={color} />
    ),
  },
  {
    label: 'Rower Elektryczny',
    value: 'electric_bike',
    icon: (color: string) => (
      <MaterialIcons name="electric-bike" size={24} color={color} />
    ),
  },
  {
    label: 'Komunikacja Miejska',
    value: 'public_transport',
    icon: (color: string) => (
      <MaterialIcons name="directions-bus" size={24} color={color} />
    ),
  },
  {
    label: 'Inna',
    value: 'other',
    icon: (color: string) => (
      <MaterialIcons name="help-center" size={24} color={color} />
    ),
  },
];
