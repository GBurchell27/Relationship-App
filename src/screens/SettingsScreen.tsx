import React from 'react';
import { View, ScrollView, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { H1, Subtitle, BodyText, Card, Divider, Button } from '../components';
import { COLORS, SPACING } from '../constants/theme';

const SettingsScreen = () => {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [shareLocation, setShareLocation] = React.useState(true);
  
  const SettingItem = ({ label, value, onPress }: { label: string, value?: string, onPress?: () => void }) => (
    <TouchableOpacity 
      style={styles.settingItem} 
      onPress={onPress}
      disabled={!onPress}
    >
      <BodyText>{label}</BodyText>
      {value && <BodyText style={styles.settingValue}>{value}</BodyText>}
    </TouchableOpacity>
  );

  const SwitchItem = ({ 
    label, 
    value, 
    onValueChange 
  }: { 
    label: string, 
    value: boolean, 
    onValueChange: (value: boolean) => void 
  }) => (
    <View style={styles.settingItem}>
      <BodyText>{label}</BodyText>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: COLORS.border, true: COLORS.secondary }}
        thumbColor={value ? '#fff' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <H1>Settings</H1>
      <Subtitle>Customize your app experience</Subtitle>
      
      <ScrollView style={styles.settingsContainer}>
        <Card style={styles.section}>
          <H1 style={styles.sectionTitle}>Account</H1>
          <Divider />
          
          <SettingItem label="Profile" value="Edit Profile" onPress={() => {}} />
          <SettingItem label="Change Password" onPress={() => {}} />
          <SettingItem label="Relationship Settings" onPress={() => {}} />
        </Card>
        
        <Card style={styles.section}>
          <H1 style={styles.sectionTitle}>Preferences</H1>
          <Divider />
          
          <SwitchItem
            label="Notifications"
            value={notifications}
            onValueChange={setNotifications}
          />
          
          <SwitchItem
            label="Dark Mode"
            value={darkMode}
            onValueChange={setDarkMode}
          />
          
          <SwitchItem
            label="Share Location"
            value={shareLocation}
            onValueChange={setShareLocation}
          />
        </Card>
        
        <Card style={styles.section}>
          <H1 style={styles.sectionTitle}>Support</H1>
          <Divider />
          
          <SettingItem label="Help Center" onPress={() => {}} />
          <SettingItem label="Privacy Policy" onPress={() => {}} />
          <SettingItem label="Terms of Service" onPress={() => {}} />
        </Card>
        
        <Button 
          title="Log Out"
          variant="primary"
          onPress={() => {}}
          style={styles.logoutButton}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.l,
  },
  settingsContainer: {
    flex: 1,
  },
  section: {
    marginBottom: SPACING.l,
    padding: SPACING.m,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: SPACING.xs,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.m,
  },
  settingValue: {
    color: COLORS.textSecondary,
  },
  logoutButton: {
    marginVertical: SPACING.l,
  },
});

export default SettingsScreen; 