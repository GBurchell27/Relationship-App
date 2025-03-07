import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { H1, Subtitle, Card, BodyText, Caption, Button } from '../components';
import { COLORS, SPACING } from '../constants/theme';

// Temporary mock data
const dateIdeas = [
  {
    id: '1',
    title: 'Picnic in the Park',
    description: 'Pack a basket with your favorite snacks and enjoy nature together.',
    category: 'Outdoors',
    estimatedCost: 'low',
  },
  {
    id: '2',
    title: 'Movie Marathon',
    description: 'Pick a series or theme and watch movies back-to-back with popcorn.',
    category: 'Stay at Home',
    estimatedCost: 'free',
  },
  {
    id: '3',
    title: 'Cooking Class',
    description: 'Learn to make a new dish together with an online cooking class.',
    category: 'Food',
    estimatedCost: 'medium',
  },
  {
    id: '4',
    title: 'Stargazing',
    description: 'Drive to a spot with minimal light pollution and gaze at the stars.',
    category: 'Outdoors',
    estimatedCost: 'free',
  },
];

const DateIdeasScreen = () => {
  const renderItem = ({ item }: { item: any }) => (
    <Card style={styles.cardSpacing} onPress={() => {}}>
      <View style={styles.cardHeader}>
        <H1 style={styles.cardTitle}>{item.title}</H1>
        <View style={styles.categoryContainer}>
          <Caption style={styles.category}>{item.category}</Caption>
        </View>
      </View>
      
      <BodyText style={styles.description}>{item.description}</BodyText>
      
      <View style={styles.cardFooter}>
        <Caption style={styles.costLabel}>
          Cost: <Caption style={styles.costValue}>{item.estimatedCost}</Caption>
        </Caption>
        <Button 
          title="Plan This Date"
          variant="secondary"
          size="small"
          onPress={() => {}}
        />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <H1>Date Ideas</H1>
      <Subtitle>Find inspiration for your next adventure together</Subtitle>
      
      <FlatList
        data={dateIdeas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
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
  listContainer: {
    paddingBottom: SPACING.l,
  },
  cardSpacing: {
    marginBottom: SPACING.m,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.s,
  },
  cardTitle: {
    fontSize: 18,
    flex: 1,
  },
  categoryContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 20,
    paddingHorizontal: SPACING.s,
    paddingVertical: SPACING.xs,
  },
  category: {
    color: COLORS.text,
  },
  description: {
    marginBottom: SPACING.m,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  costLabel: {
    color: COLORS.textSecondary,
  },
  costValue: {
    fontWeight: 'bold' as 'bold',
  },
});

export default DateIdeasScreen; 