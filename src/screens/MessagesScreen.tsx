import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { H1, Subtitle, Card, BodyText, Caption, Button } from '../components';
import { COLORS, SPACING } from '../constants/theme';

// Temporary mock data
const messages = [
  {
    id: '1',
    question: 'What is your favorite memory of us together?',
    category: 'Reflection',
    answered: false,
  },
  {
    id: '2',
    question: 'What small gesture of mine makes you feel most loved?',
    category: 'Love Languages',
    answered: false,
  },
  {
    id: '3',
    question: 'Where would you like to travel together next?',
    category: 'Future Plans',
    answered: false,
  },
  {
    id: '4',
    question: 'What is one thing you appreciate about our relationship?',
    category: 'Gratitude',
    answered: false,
  },
];

const MessagesScreen = () => {
  const renderItem = ({ item }: { item: any }) => (
    <Card style={styles.cardSpacing}>
      <View style={styles.cardHeader}>
        <Caption style={styles.cardCategory}>{item.category}</Caption>
      </View>
      
      <H1 style={styles.question}>{item.question}</H1>
      
      <View style={styles.cardFooter}>
        <Button
          title="Answer"
          variant="primary"
          size="small"
          onPress={() => {}}
        />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <H1>Message Prompts</H1>
      <Subtitle>Daily questions to deepen your connection</Subtitle>
      
      <FlatList
        data={messages}
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
    marginBottom: SPACING.xs,
  },
  cardCategory: {
    color: COLORS.textSecondary,
  },
  question: {
    fontSize: 18,
    marginBottom: SPACING.m,
  },
  cardFooter: {
    alignItems: 'flex-end',
  },
});

export default MessagesScreen; 