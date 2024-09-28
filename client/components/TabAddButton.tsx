import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BOTTOM_TAB_BAR_HEIGHT } from '@/constants/Layout';
import Add from '@/assets/icons/add.svg';

type TabAddButtonProps = {
  onPress: () => void;
};

export const TabAddButton = ({ onPress }: TabAddButtonProps) => {
  return (
    <View style={styles.container} pointerEvents='box-none'>
      <Pressable style={styles.button} onPress={onPress}>
        <Add width={32} height={32} />
      </Pressable>
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
    height: BOTTOM_TAB_BAR_HEIGHT,
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
    backgroundColor: 'green',
    color: 'white',
  },
});
