import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

type TabAddButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const TabBarAddButton: React.FC<TabAddButtonProps> = ({
  onPress,
  style,
}) => {
  return (
    <View style={[styles.container, style]} pointerEvents='box-none'>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <MaterialIcons name='add' size={32} color='white' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    right: 0,
    zIndex: 5,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.light.green[500],
    color: 'white',
  },
});
