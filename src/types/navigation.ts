import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

// Define the type for our stack navigator's route params
export type RootStackParamList = {
  Main: undefined;
  // Add other stack routes here
};

// Define the type for our bottom tab navigator's route params
export type MainTabParamList = {
  Home: undefined;
  Journal: undefined;
  DateIdeas: undefined;
  Messages: undefined;
  Settings: undefined;
};

// Navigation prop types
export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

export type JournalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Journal'>,
  StackNavigationProp<RootStackParamList>
>;

export type DateIdeasScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'DateIdeas'>,
  StackNavigationProp<RootStackParamList>
>;

export type MessagesScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Messages'>,
  StackNavigationProp<RootStackParamList>
>;

export type SettingsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'Settings'>,
  StackNavigationProp<RootStackParamList>
>;

// Route prop types
export type HomeScreenRouteProp = RouteProp<MainTabParamList, 'Home'>;
export type JournalScreenRouteProp = RouteProp<MainTabParamList, 'Journal'>;
export type DateIdeasScreenRouteProp = RouteProp<MainTabParamList, 'DateIdeas'>;
export type MessagesScreenRouteProp = RouteProp<MainTabParamList, 'Messages'>;
export type SettingsScreenRouteProp = RouteProp<MainTabParamList, 'Settings'>; 