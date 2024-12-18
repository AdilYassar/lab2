import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { navigate } from '../utils/NavigationUtil';

const SplashScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* Image or Logo of the Education Platform */}
           
            <Text style={styles.title}>Welcome to the Education Platform</Text>
            <Text style={styles.subtitle}>A world of knowledge at your fingertips</Text>
            
            {/* Additional Description */}
            <Text style={styles.description}>
                Explore interactive learning, quizzes, and live sessions to enhance your skills.
            </Text>

            {/* Button to proceed */}
            <TouchableOpacity style={styles.button} onPress={() => navigate('HomeScreen')}>
                <Text style={styles.buttonText}>Start Learning</Text>
            </TouchableOpacity>

            {/* Footer with additional platform info */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Powered by Education Technologies</Text>
                <Text style={styles.footerText}>© 2024 Education Platform. All rights reserved.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F4F4F9', // light background for a clean look
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2C3E50', // dark blue for a professional look
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#7F8C8D', // softer gray for subtitled text
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#34495E', // dark gray for readability
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 30,
    },
    button: {
        backgroundColor: '#3498DB', // vibrant blue for the button
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        elevation: 3, // subtle shadow for button
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#BDC3C7', // light gray border for the footer
        width: '100%',
    },
    footerText: {
        fontSize: 12,
        color: '#7F8C8D',
    },
});

export default SplashScreen;
