import React from 'react';
import { 
  View, 
  StyleSheet, 
  StyleProp, 
  ViewStyle, 
  TouchableOpacity 
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../../constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  elevation?: number;
  padding?: keyof typeof SPACING | number;
  margin?: keyof typeof SPACING | number;
  borderRadius?: keyof typeof BORDER_RADIUS | number;
}

const Card = ({
  children,
  style,
  onPress,
  elevation = 2,
  padding = 'm',
  margin,
  borderRadius = 'm',
}: CardProps) => {
  
  const cardStyle = [
    styles.card,
    {
      padding: typeof padding === 'string' ? SPACING[padding] : padding,
      margin: typeof margin === 'string' && margin ? SPACING[margin] : margin,
      borderRadius: typeof borderRadius === 'string' ? BORDER_RADIUS[borderRadius] : borderRadius,
      shadowOpacity: elevation * 0.05,
      elevation,
    },
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.9}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});

export default Card; 