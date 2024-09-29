import react, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const useUser = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createUser = async (userId, userData) => {
    try {
      await firestore().collection('users').doc(userId).set(userData);
      setSuccess(true);
    } catch (error) {
      setError(`Error creating user in Firestore: ${error.message}`);
      setSuccess(false);
    }
  };

  const updateUser = async (userId, userData) => {
    try {
      await firestore().collection('users').doc(userId).update(userData);
      setSuccess(true);
    } catch (error) {
      setError(`Error updating user: ${error.message}`);
      setSuccess(false);
    }
  };

  const deleteUser = async userId => {
    try {
      await firestore().collection('users').doc(userId).delete();
      setSuccess(true);
    } catch (error) {
      setError(`Error deleting user: ${error.message}`);
      setSuccess(false);
    }
  };

  const getUser = async userId => {
    try {
      const userDoc = await firestore().collection('users').doc(userId).get();
      return userDoc.exists ? userDoc.data() : null;
    } catch (error) {
      setError(`Error reading user data from Firestore: ${error.message}`);
      console.error('Error reading user data from Firestore:', error.message);
      return null;
    }
  };
  const resetUserHook = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    createUser,
    updateUser,
    getUser,
    deleteUser,
    error,
    success,
    resetUserHook,
  };
};
export default useUser;
