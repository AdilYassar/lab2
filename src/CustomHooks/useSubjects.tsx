import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const useSubjects = () => {
  const [subjects, setSubjects] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubjects = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('subjects')
        .doc('NS5bTidLerIhbbb1Y4VM')
        .get();

      if (documentSnapshot.exists) {
        setSubjects(documentSnapshot.data() || {});
      } else {
        console.warn('Document does not exist');
      }
    } catch (err) {
      console.error('Error fetching document:', err);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return { subjects, loading, error };
};

export default useSubjects;
