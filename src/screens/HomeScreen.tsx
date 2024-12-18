import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { navigate } from '../utils/NavigationUtil';

const dummyData = [
  { id: '1', name: 'Mathematics', details: 'Algebra, Geometry, Calculus' },
  { id: '2', name: 'Science', details: 'Physics, Chemistry, Biology' },
  { id: '3', name: 'History', details: 'Ancient, Medieval, Modern' },
  { id: '4', name: 'Geography', details: 'Physical, Human, Environmental' },
  { id: '5', name: 'English', details: 'Grammar, Literature, Writing' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Courses</Text>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>{item.details}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigate('DetailScreen')}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Light gray background
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  itemContainer: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#FFFFFF', // White card background
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // Android shadow
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for the title
    marginBottom: 8,
  },
  itemDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#4CAF50', // Green button
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF', // White text
    fontWeight: '600',
  },
});

export default HomeScreen;
