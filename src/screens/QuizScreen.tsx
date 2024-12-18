import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const QuizScreen = ({ route }: { route: any }) => {
  const { quizData } = route.params; // Get the quiz data passed from NextScreen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz</Text>
      <FlatList
        data={quizData} // Use quizData here
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
            {item.options.map((option: string, index: number) => (
              <Text key={index} style={styles.option}>
                {option}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  option: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default QuizScreen;
