import { firebase, googleAuthProvider, emailAuthProvider } from '../firebase/firebase';

const testUser = process.env.FIREBASE_TEST_USER

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginTest = () => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(testUser, 'password');
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
