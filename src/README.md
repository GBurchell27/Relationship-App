# Relationship App - Source Code Structure

## Overview

This React Native application follows a modular, feature-based architecture designed for maintainability and scalability. The app helps couples strengthen their relationship through shared journaling, date planning, and communication prompts.

## Directory Structure

- **api/**: API integration layer (Supabase clients, API calls)
- **components/**: Reusable UI components
- **screens/**: Screen components
- **navigation/**: Navigation configuration  
- **hooks/**: Custom React hooks
- **context/**: React Context providers
- **utils/**: Helper functions
- **types/**: TypeScript type definitions
- **constants/**: App constants, theme variables
- **assets/**: Local assets

## Key Technologies

- React Native (with TypeScript)
- React Navigation for routing
- Supabase for backend services
- Expo (if applicable)

## Development Guidelines

1. **Component Structure**:
   - Keep components focused on a single responsibility
   - Use TypeScript interfaces for props
   - Extract complex logic to custom hooks

2. **State Management**:
   - Use React Context for global app state
   - Keep component state local when possible
   - Prefer hooks for reusable stateful logic

3. **API Integration**:
   - All Supabase/API calls should go through the `api` directory
   - Handle loading and error states consistently

4. **TypeScript**:
   - Define interfaces for all data models in `types` directory
   - Use proper typing for component props and function parameters/returns

5. **Styling**:
   - Use the theme constants for colors, spacing, typography
   - Ensure responsive design works across device sizes

## Getting Started

1. Install dependencies: `npm install` or `yarn install`
2. Start the development server: `npm start` or `yarn start`
3. Run on iOS: `npm run ios` or `yarn ios`
4. Run on Android: `npm run android` or `yarn android` 