import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { COLORS, SPACING } from '../../constants/theme';

// Define alignSelf type to be more specific
type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

interface DividerProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
  thickness?: number;
  direction?: 'horizontal' | 'vertical';
  marginVertical?: number;
  marginHorizontal?: number;
}

const Divider = ({
  style,
  color = COLORS.border,
  thickness = 1,
  direction = 'horizontal',
  marginVertical = SPACING.s,
  marginHorizontal = 0,
}: DividerProps) => {
  const dividerStyle = direction === 'horizontal'
    ? {
        borderBottomWidth: thickness,
        marginVertical,
        marginHorizontal,
        borderColor: color,
      } as const
    : {
        borderLeftWidth: thickness,
        marginHorizontal: marginVertical, // swap for logical naming in vertical context
        marginVertical: marginHorizontal,
        alignSelf: 'stretch' as AlignSelf,
        height: '100%',
        borderColor: color,
      } as const;

  return <View style={[styles.divider, dividerStyle, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'stretch' as AlignSelf,
  },
});

export default Divider; 