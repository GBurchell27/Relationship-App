import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { H1, Subtitle, Button } from '../components';
import { COLORS, SPACING } from '../constants/theme';
import { HomeScreenNavigationProp } from '../types/navigation';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <H1>Welcome to Our Relationship App</H1>
      <Subtitle>Strengthen your connection every day</Subtitle>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Journal" 
          onPress={() => navigation.navigate('Journal')}
          style={styles.buttonSpacing}
        />
        
        <Button 
          title="Date Ideas" 
          onPress={() => navigation.navigate('DateIdeas')}
          style={styles.buttonSpacing}
        />
        
        <Button 
          title="Messages" 
          onPress={() => navigation.navigate('Messages')}
          style={styles.buttonSpacing}
        />
        
        <Button 
          title="Settings" 
          onPress={() => navigation.navigate('Settings')}
          style={styles.buttonSpacing}
          variant="outline"
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.l,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    marginTop: SPACING.xl,
  },
  buttonSpacing: {
    marginVertical: SPACING.xs,
  },
});

export default HomeScreen; 