import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { navigate } from '../utils/NavigationUtil';

const detailedDummyData = [
  
  {
    id: '1',
    name: 'Mathematics',
    details: 'Algebra, Geometry, Calculus',
    description: 'Mathematics is the study of numbers, shapes, and patterns.',
    teacher: 'Mr. John Doe',
    schedule: 'Monday, Wednesday, Friday - 10:00 AM to 11:30 AM',
    quiz: [
      {
        question: 'What is the value of x in the equation 2x + 3 = 7?',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2'
      },
      {
        question: 'What is the area of a circle with radius 5?',
        options: ['25π', '10π', '15π', '30π'],
        correctAnswer: '25π'
      },
      {
        question: 'What is the derivative of x^2?',
        options: ['2x', 'x^2', 'x', '4x'],
        correctAnswer: '2x'
      },
      {
        question: 'What is the sum of angles in a triangle?',
        options: ['180°', '90°', '360°', '270°'],
        correctAnswer: '180°'
      },
      {
        question: 'What is the value of pi?',
        options: ['3.14159', '2.71828', '1.61803', '1.41421'],
        correctAnswer: '3.14159'
      }
    ]
  },
  {
    id: '2',
    name: 'Science',
    details: 'Physics, Chemistry, Biology',
    description: 'Science is the study of the natural world through observation and experiment.',
    teacher: 'Ms. Jane Smith',
    schedule: 'Tuesday, Thursday - 1:00 PM to 2:30 PM',
    quiz: [
      {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'O2', 'CO2', 'NaCl'],
        correctAnswer: 'H2O'
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars'
      },
      {
        question: 'What is the powerhouse of the cell?',
        options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Endoplasmic Reticulum'],
        correctAnswer: 'Mitochondria'
      },
      {
        question: 'What is the boiling point of water in Celsius?',
        options: ['0°C', '50°C', '100°C', '150°C'],
        correctAnswer: '100°C'
      },
      {
        question: 'Which gas do plants absorb from the atmosphere for photosynthesis?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide'
      }
    ]
  },
  {
    id: '3',
    name: 'History',
    details: 'Ancient, Medieval, Modern',
    description: 'History is the study of past events, particularly in human affairs.',
    teacher: 'Mr. Richard Roe',
    schedule: 'Monday, Wednesday - 3:00 PM to 4:30 PM',
    quiz: [
      {
        question: 'Who was the first president of the United States?',
        options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John Adams'],
        correctAnswer: 'George Washington'
      },
      {
        question: 'In which year did World War II begin?',
        options: ['1939', '1941', '1914', '1918'],
        correctAnswer: '1939'
      },
      {
        question: 'Which empire was ruled by Julius Caesar?',
        options: ['Roman Empire', 'Ottoman Empire', 'Mongol Empire', 'Byzantine Empire'],
        correctAnswer: 'Roman Empire'
      },
      {
        question: 'Who was the queen of England during the Spanish Armada?',
        options: ['Queen Victoria', 'Queen Elizabeth I', 'Queen Mary I', 'Queen Anne'],
        correctAnswer: 'Queen Elizabeth I'
      },
      {
        question: 'What was the name of the ship that carried the Pilgrims to America in 1620?',
        options: ['The Mayflower', 'The Nina', 'The Santa Maria', 'The Endeavour'],
        correctAnswer: 'The Mayflower'
      }
    ]
  },
  {
    id: '4',
    name: 'Geography',
    details: 'Physical, Human, Environmental',
    description: 'Geography is the study of places and the relationships between people and their environments.',
    teacher: 'Ms. Emily Davis',
    schedule: 'Friday - 9:00 AM to 10:30 AM',
    quiz: [
      {
        question: 'What is the largest continent?',
        options: ['Asia', 'Africa', 'North America', 'Europe'],
        correctAnswer: 'Asia'
      },
      {
        question: 'Which river is the longest in the world?',
        options: ['Amazon', 'Nile', 'Yangtze', 'Ganges'],
        correctAnswer: 'Nile'
      },
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
      },
      {
        question: 'Which ocean is the largest?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctAnswer: 'Pacific Ocean'
      },
      {
        question: 'What is the highest mountain in the world?',
        options: ['Mount Kilimanjaro', 'Mount Everest', 'K2', 'Mount Fuji'],
        correctAnswer: 'Mount Everest'
      }
    ]
  },
  {
    id: '5',
    name: 'English',
    details: 'Grammar, Literature, Writing',
    description: 'English is the study of the language, literature, and composition.',
    teacher: 'Mr. Michael Brown',
    schedule: 'Tuesday, Thursday - 10:00 AM to 11:30 AM',
    quiz: [
      {
        question: 'What is the synonym of "happy"?',
        options: ['Sad', 'Excited', 'Joyful', 'Angry'],
        correctAnswer: 'Joyful'
      },
      {
        question: 'Which of the following is a preposition?',
        options: ['Quickly', 'Under', 'Sad', 'Cat'],
        correctAnswer: 'Under'
      },
      {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 'William Shakespeare'
      },
      {
        question: 'What is the past tense of "go"?',
        options: ['Go', 'Went', 'Gone', 'Going'],
        correctAnswer: 'Went'
      },
      {
        question: 'Which of these is a compound sentence?',
        options: ['I like reading.', 'She likes tea, but he prefers coffee.', 'He eats breakfast.', 'It is raining.'],
        correctAnswer: 'She likes tea, but he prefers coffee.'
      }
    ]
  }
];



const NextScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const handleStartQuiz = () => {
    // Find the selected subject data in the dummy data
    const selectedSubject = detailedDummyData.find(sub => sub.id === item.id);
    
    // Pass the quiz data to QuizScreen
   if (selectedSubject) {
     navigate('QuizScreen', { quizData: selectedSubject.quiz });
   } else {
     console.error('Selected subject not found');
   }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.details}>{item.details}</Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.sectionHeader}>Description</Text>
        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.sectionHeader}>Teacher</Text>
        <Text style={styles.teacher}>{item.teacher}</Text>

        <Text style={styles.sectionHeader}>Schedule</Text>
        <Text style={styles.schedule}>{item.schedule}</Text>
      </View>

      {/* Start Quiz Button */}
      <TouchableOpacity style={styles.button} onPress={handleStartQuiz}>
        <Text style={styles.buttonText}>Start Quiz</Text>
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
  card: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  details: {
    fontSize: 16,
    color: '#E8F5E9',
    textAlign: 'center',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
    marginTop: 10,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    marginBottom: 12,
  },
  teacher: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  schedule: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NextScreen;
