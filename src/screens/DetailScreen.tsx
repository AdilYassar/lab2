import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { navigate } from '../utils/NavigationUtil';

const detailedDummyData = [
  {
    id: '1',
    name: 'Mathematics',
    details: 'Algebra, Geometry, Calculus',
    description: 'Mathematics is the study of numbers, shapes, and patterns.',
    teacher: 'Mr. John Doe',
    schedule: 'Monday, Wednesday, Friday - 10:00 AM to 11:30 AM'
  },
  {
    id: '2',
    name: 'Science',
    details: 'Physics, Chemistry, Biology',
    description: 'Science is the study of the natural world through observation and experiment.',
    teacher: 'Ms. Jane Smith',
    schedule: 'Tuesday, Thursday - 1:00 PM to 2:30 PM'
  },
  {
    id: '3',
    name: 'History',
    details: 'Ancient, Medieval, Modern',
    description: 'History is the study of past events, particularly in human affairs.',
    teacher: 'Mr. Richard Roe',
    schedule: 'Monday, Wednesday - 3:00 PM to 4:30 PM'
  },
  {
    id: '4',
    name: 'Geography',
    details: 'Physical, Human, Environmental',
    description: 'Geography is the study of places and the relationships between people and their environments.',
    teacher: 'Ms. Emily Davis',
    schedule: 'Friday - 9:00 AM to 10:30 AM'
  },
  {
    id: '5',
    name: 'English',
    details: 'Grammar, Literature, Writing',
    description: 'English is the study of the language, literature, and composition.',
    teacher: 'Mr. Michael Brown',
    schedule: 'Tuesday, Thursday - 10:00 AM to 11:30 AM'
  },
];

const DetailScreen = () => {
  const handlePress = (item: { id: string; name: string; details: string; description: string; teacher: string; schedule: string }) => {
    navigate('NextScreen', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses</Text>
      <FlatList
        data={detailedDummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)} style={styles.itemTouchable}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemDetails}>{item.details}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <View style={styles.metaContainer}>
                <Text style={styles.itemTeacher}>👨‍🏫 {item.teacher}</Text>
                <Text style={styles.itemSchedule}>📅 {item.schedule}</Text>
              </View>
            </View>

            <View>
              <Text> lets start quiz </Text>
            </View>
          </TouchableOpacity>
          
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F4F8', // Light background color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  itemTouchable: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Android shadow
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#4CAF50', // Theme color
  },
  itemDetails: {
    fontSize: 16,
    color: '#777',
    marginBottom: 6,
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  itemTeacher: {
    fontSize: 14,
    color: '#333',
  },
  itemSchedule: {
    fontSize: 14,
    color: '#333',
  },
});

export default DetailScreen;
