/**
 * UI Components
 * 
 * This directory contains reusable UI components used throughout the app.
 * 
 * Organizing principles:
 * - Group components by type (buttons, cards, inputs, etc.) or feature
 * - Keep components focused on UI presentation
 * - Extract business logic to hooks where possible
 * - Use TypeScript interfaces for component props
 * 
 * Examples of components to include:
 * - Buttons
 * - Cards
 * - Form inputs
 * - Loading indicators
 * - Modal components
 * - Lists and list items
 */

// Example component exports (when components are created)
// export { default as Button } from './Button';
// export { default as Card } from './Card';
// export { default as TextInput } from './TextInput';

// Export button components
import Button from './Button';
export { Button };

// Export card components
import Card from './Card';
export { Card };

// Export input components
import { TextInput, SearchInput } from './Input';
export { TextInput, SearchInput };

// Export typography components
import {
  H1,
  H2,
  H3,
  Subtitle,
  BodyText,
  Caption,
} from './Typography';

export {
  H1,
  H2,
  H3,
  Subtitle,
  BodyText,
  Caption,
};

// Export divider component
import Divider from './Divider';
export { Divider };