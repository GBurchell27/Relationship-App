import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { H1, Subtitle, Card, BodyText, Caption, Button } from '../components';
import { COLORS, SPACING } from '../constants/theme';

const JournalScreen = () => {
  return (
    <View style={styles.container}>
      <H1>Journal</H1>
      <Subtitle>Share your thoughts and memories together</Subtitle>
      
      <ScrollView style={styles.entriesContainer}>
        {/* This will be replaced with actual journal entries from the backend */}
        <Card style={styles.entryCardSpacing}>
          <Caption>March 7, 2023</Caption>
          <H1 style={styles.entryTitle}>Our First Date</H1>
          <BodyText style={styles.entryContent}>
            Today was amazing! We went to that new restaurant downtown and talked for hours.
            I can't wait for our next adventure together.
          </BodyText>
          <Button 
            title="View Details"
            variant="text"
            size="small"
            onPress={() => {}}
            style={styles.viewButton}
          />
        </Card>
        
        <Card style={styles.entryCardSpacing}>
          <Caption>March 3, 2023</Caption>
          <H1 style={styles.entryTitle}>Movie Night</H1>
          <BodyText style={styles.entryContent}>
            We watched our favorite movie and had homemade popcorn. Simple moments like these
            are what make our relationship special.
          </BodyText>
          <Button 
            title="View Details"
            variant="text"
            size="small"
            onPress={() => {}}
            style={styles.viewButton}
          />
        </Card>
      </ScrollView>

      <Button
        title="Add New Entry"
        onPress={() => {}}
        style={styles.addButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.l,
  },
  entriesContainer: {
    flex: 1,
  },
  entryCardSpacing: {
    marginBottom: SPACING.m,
  },
  entryTitle: {
    fontSize: 18,
    marginVertical: SPACING.xs,
  },
  entryContent: {
    color: COLORS.textSecondary,
  },
  viewButton: {
    alignSelf: 'flex-end',
    marginTop: SPACING.s,
  },
  addButton: {
    marginTop: SPACING.m,
  }
});

export default JournalScreen; 