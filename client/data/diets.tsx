import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export const DIETS = [
  {
    icon: (color: string) => (
      <MaterialCommunityIcons name="food-apple" size={24} color={color} />
    ),
    label: 'Wegańska',
    value: 'vegan',
  },
  {
    icon: (color: string) => (
      <MaterialCommunityIcons name="food-variant" size={24} color={color} />
    ),

    label: 'Wegetariańska',
    value: 'vegetarian',
  },
  {
    icon: (color: string) => (
      <MaterialCommunityIcons name="fish" size={24} color={color} />
    ),
    label: 'Peskatariańska',
    value: 'pescatarian',
  },
  {
    icon: (color: string) => (
      <MaterialIcons name="restaurant" size={24} color={color} />
    ),

    label: 'Bez Restrykcji',
    value: 'omnivore',
  },
  {
    icon: (color: string) => (
      <MaterialIcons name="egg" size={24} color={color} />
    ),

    label: 'Paleo',
    value: 'paleo',
  },
  {
    icon: (color: string) => (
      <MaterialCommunityIcons name="grill" size={24} color={color} />
    ),
    label: 'Ketogeniczna',
    value: 'keto',
  },
];
