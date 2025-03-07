import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  StyleProp, 
  ViewStyle,
  TextStyle 
} from 'react-native';
import { COLORS, SPACING, FONT_SIZE, BORDER_RADIUS } from '../../constants/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  
  const getButtonStyle = () => {
    const baseStyle = styles.button;
    const sizeStyle = styles[`${size}Button`];
    const variantStyle = styles[`${variant}Button`];
    const disabledStyle = disabled ? styles.disabledButton : {};
    
    return [baseStyle, sizeStyle, variantStyle, disabledStyle, style];
  };
  
  const getTextStyle = () => {
    const baseTextStyle = styles.buttonText;
    const sizeTextStyle = styles[`${size}Text`];
    const variantTextStyle = styles[`${variant}Text`];
    const disabledTextStyle = disabled ? styles.disabledText : {};
    
    return [baseTextStyle, sizeTextStyle, variantTextStyle, disabledTextStyle, textStyle];
  };
  
  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' || variant === 'text' ? COLORS.primary : COLORS.card} 
        />
      ) : (
        <>
          {leftIcon}
          <Text style={getTextStyle()}>{title}</Text>
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.m,
  },
  buttonText: {
    fontWeight: '600',
  },
  
  // Size variants
  smallButton: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.m,
  },
  mediumButton: {
    paddingVertical: SPACING.s,
    paddingHorizontal: SPACING.l,
  },
  largeButton: {
    paddingVertical: SPACING.m,
    paddingHorizontal: SPACING.xl,
  },
  
  // Text size variants
  smallText: {
    fontSize: FONT_SIZE.xs,
  },
  mediumText: {
    fontSize: FONT_SIZE.s,
  },
  largeText: {
    fontSize: FONT_SIZE.m,
  },
  
  // Button variants
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: COLORS.secondary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  textButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  
  // Text variants
  primaryText: {
    color: COLORS.card,
  },
  secondaryText: {
    color: COLORS.card,
  },
  outlineText: {
    color: COLORS.primary,
  },
  textText: {
    color: COLORS.primary,
  },
  
  // Disabled state
  disabledButton: {
    backgroundColor: COLORS.border,
    borderColor: COLORS.border,
    opacity: 0.7,
  },
  disabledText: {
    color: COLORS.textSecondary,
  },
});

export default Button; 