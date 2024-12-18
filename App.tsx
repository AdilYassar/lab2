
import React, { useEffect, useRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import Navigation from '../labExam/src/Navigation/Navigation'
import { firebase } from '@react-native-firebase/firestore';


const App = () => {
  useEffect(() => {
    // Check if Firebase is initialized
    if (firebase.apps.length > 0) {
      console.log('Firebase is connected!');
    } else {
      console.log('Firebase is NOT connected!');
    }
  }, []);
  return <Navigation />;
};
export default App;
