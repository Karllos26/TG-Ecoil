import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const toggleChecked = () => {
    onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleChecked}>
      <View style={[styles.checkbox, checked ? styles.checked : null]}>
        {checked && <Ionicons name="checkmark" size={9} color="white" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'blue',
  },
});

export default Checkbox;
