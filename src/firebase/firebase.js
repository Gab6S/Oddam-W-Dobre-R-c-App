import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU-a5eco5brU_Qm1HfJ97sQc4m-S1ApPk",
  authDomain: "oddam-w-dobre-rece-11ebf.firebaseapp.com",
  projectId: "oddam-w-dobre-rece-11ebf",
  storageBucket: "oddam-w-dobre-rece-11ebf.appspot.com",
  messagingSenderId: "624492652676",
  appId: "1:624492652676:web:f2449845d2d1a8da663ad1",
  measurementId: "G-GT69MFJXTL",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    try {
      await userRef.set({
        email,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
