import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

const QuizScreen = ({ route }: { route: any }) => {
  const { quizData } = route.params; // Get the quiz data passed from NextScreen
  const [selectedAnswers, setSelectedAnswers] = useState<any>({}); // State to keep track of selected answers

  const handleAnswerSelect = (questionIndex: number, selectedOption: string) => {
    setSelectedAnswers((prevAnswers: any) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    Alert.alert('Quiz Finished', `Your score: ${score} / ${quizData.length}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz</Text>
      <FlatList
        data={quizData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
            {item.options.map((option: string, optionIndex: number) => (
              <TouchableOpacity
                key={optionIndex}
                style={[
                  styles.option,
                  selectedAnswers[index] === option && styles.selectedOption, // Highlight selected answer
                ]}
                onPress={() => handleAnswerSelect(index, option)}>
                <Text
                  style={[
                    styles.optionText,
                    selectedAnswers[index] === option && styles.selectedOptionText, // Change text color for selected option
                  ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Quiz</Text>
      </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4CAF50',
  },
  questionContainer: {
    marginBottom: 25,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  option: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4CAF50',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuizScreen;
