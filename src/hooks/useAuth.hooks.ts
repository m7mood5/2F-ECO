import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>(
    null,
  );
  const [userError, setUserError] = useState<string | null>(null);
  const [forgetError, setForgetError] = useState<string | null>(null);
  const [forgetSuccess, setForgetSuccess] = useState<string | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);
  return {
    currentUser,
    userError,
    forgetError,
    forgetSuccess,
    signInWithEmailAndPassword: async (email: string, password: string) => {
      try {
        setUserError(null);
        await auth().signInWithEmailAndPassword(email, password);
      } catch (error: FirebaseAuthTypes.Error) {
        if (error.code === 'auth/email-already-in-use') {
          setUserError('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          setUserError('That email address is invalid!');
        } else if (error.code === 'auth/wrong-password') {
          setUserError('Incorrect password. Please double-check it.');
        } else if (error.code === 'auth/too-many-requests') {
          setUserError(
            'Account temporarily locked. Reset your password or try again later.',
          );
        } else {
          setUserError('incorrect Email or Password');
        }
      }
    },
    createUserWithEmailAndPassword: async (email: string, password: string) => {
      try {
        const x = await auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        setUserError(error);
      }
    },
    signOut: async () => {
      try {
        await auth().signOut();
      } catch (error) {
        setUserError(error);
      }
    },
    sendPasswordResetEmail: async (email: string) => {
      try {
        setForgetError(null);
        setForgetSuccess(null);
        await auth().sendPasswordResetEmail(email);
        setForgetSuccess(
          'Please check your email and follow the instructions.',
        );
      } catch (error: FirebaseAuthTypes.Error) {
        setForgetSuccess(null);
        if (error.code === 'auth/user-not-found') {
          setForgetError('No user found for this email.');
        } else {
          setForgetError('An error occurred. Please try again later.');
        }
      }
    },
  };
};
export default useAuth;
