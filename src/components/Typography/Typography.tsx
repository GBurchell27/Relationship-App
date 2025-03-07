import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

// Font weights must use specific string values in React Native
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

interface TypographyProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  numberOfLines?: number;
  onPress?: () => void;
}

export const H1 = ({ 
  children, 
  style, 
  color = COLORS.text,
  align,
  numberOfLines,
  onPress,
}: TypographyProps) => (
  <Text 
    style={[
      styles.h1, 
      { color }, 
      align && { textAlign: align },
      style
    ]}
    numberOfLines={numberOfLines}
    onPress={onPress}
  >
    {children}
  </Text>
);

export const H2 = ({ 
  children, 
  style, 
  color = COLORS.text,
  align,
  numberOfLines,
  onPress,
}: TypographyProps) => (
  <Text 
    style={[
      styles.h2, 
      { color }, 
      align && { textAlign: align },
      style
    ]}
    numberOfLines={numberOfLines}
    onPress={onPress}
  >
    {children}
  </Text>
);

export const H3 = ({ 
  children, 
  style, 
  color = COLORS.text,
  align,
  numberOfLines,
  onPress,
}: TypographyProps) => (
  <Text 
    style={[
      styles.h3, 
      { color }, 
      align && { textAlign: align },
      style
    ]}
    numberOfLines={numberOfLines}
    onPress={onPress}
  >
    {children}
  </Text>
);

export const Subtitle = ({ 
  children, 
  style, 
  color = COLORS.textSecondary,
  align,
  numberOfLines,
  onPress,
}: TypographyProps) => (
  <Text 
    style={[
      styles.subtitle, 
      { color }, 
      align && { textAlign: align },
      style
    ]}
    numberOfLines={numberOfLines}
    onPress={onPress}
  >
    {children}
  </Text>
);

export const BodyText = ({ 
  children, 
  style, 
  color = COLORS.text,
  align,
  numberOfLines,
  onPress,
}: TypographyProps) => (
  <Text 
    style={[
      styles.body, 
      { color }, 
      align && { textAlign: align },
      style
    ]}
    numberOfLines={numberOfLines}
    onPress={onPress}
  >
    {children}
  </Text>
);

export const Caption = ({ 
  children, 
  style, 
  color = COLORS.textSecondary,
  align,
  numberOfLines,
  onPress,
}: TypographyProps) => (
  <Text 
    style={[
      styles.caption, 
      { color }, 
      align && { textAlign: align },
      style
    ]}
    numberOfLines={numberOfLines}
    onPress={onPress}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  h1: {
    fontSize: FONT_SIZE.xxxl,
    fontWeight: '700' as FontWeight,
    marginBottom: 8,
  },
  h2: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: '700' as FontWeight,
    marginBottom: 6,
  },
  h3: {
    fontSize: FONT_SIZE.xl,
    fontWeight: '700' as FontWeight,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: FONT_SIZE.l,
    fontWeight: '500' as FontWeight,
    marginBottom: 4,
  },
  body: {
    fontSize: FONT_SIZE.m,
    fontWeight: '400' as FontWeight,
    lineHeight: 22,
  },
  caption: {
    fontSize: FONT_SIZE.xs,
    fontWeight: '400' as FontWeight,
    lineHeight: 16,
  },
}); 