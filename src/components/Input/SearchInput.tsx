import React from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  StyleProp, 
  ViewStyle 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZE, BORDER_RADIUS } from '../../constants/theme';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
  style?: StyleProp<ViewStyle>;
  onSubmit?: () => void;
}

const SearchInput = ({ 
  value, 
  onChangeText, 
  placeholder = 'Search...', 
  onClear, 
  style,
  onSubmit,
}: SearchInputProps) => {
  
  const handleClear = () => {
    onChangeText('');
    if (onClear) onClear();
  };
  
  return (
    <View style={[styles.container, style]}>
      <Ionicons name="search" size={20} color={COLORS.textSecondary} style={styles.searchIcon} />
      
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        clearButtonMode="never" // iOS only, we'll use our own clear button
      />
      
      {value.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <Ionicons name="close-circle" size={18} color={COLORS.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.m,
    paddingHorizontal: SPACING.m,
    height: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: SPACING.s,
  },
  input: {
    flex: 1,
    fontSize: FONT_SIZE.s,
    color: COLORS.text,
    height: '100%',
    padding: 0, // Remove default padding
  },
  clearButton: {
    padding: SPACING.xs,
  },
});

export default SearchInput;