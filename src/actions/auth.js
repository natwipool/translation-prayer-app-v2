import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

let triedFacebook = false;

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLoginWithGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginWithFacebook = () => {
  console.log(facebookAuthProvider)
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
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