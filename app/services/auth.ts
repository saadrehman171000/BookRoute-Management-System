import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { router } from 'expo-router';

// Add this line at the top
const SUPER_ADMIN_EMAIL = 'saadrehman17100@gmail.com';

// Signup function (for admin only)
export const signupAdmin = async (email: string, password: string, name: string) => {
  try {
    // Check if email exists
    const methods = await fetchSignInMethodsForEmail(auth, email);
    if (methods.length > 0) {
      // Email exists, redirect to login
      router.replace('/(auth)/login');
      throw new Error('Email already registered. Please login instead.');
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      name,
      email,
      role: 'admin',
      emailVerified: false,
      createdAt: new Date().toISOString()
    });

    // Redirect to login after successful signup
    router.replace('/(auth)/login');
    return {
      success: true,
      message: 'Account created! Please check your email for verification.'
    };
  } catch (error: any) {
    console.error('Signup error:', error);
    
    // Handle specific Firebase errors
    switch (error.code) {
      case 'auth/email-already-in-use':
        router.replace('/(auth)/login');
        throw new Error('Email already registered. Please login instead.');
      case 'auth/invalid-email':
        throw new Error('Invalid email address');
      case 'auth/operation-not-allowed':
        throw new Error('Email/password accounts are not enabled');
      case 'auth/weak-password':
        throw new Error('Password should be at least 6 characters');
      default:
        throw new Error(error.message);
    }
  }
};

// Sign out
export const signOut = async () => {
  try {
    await auth.signOut();
    router.replace('/(auth)/login');
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Add this function
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Update this function
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    if (!user.emailVerified) {
      throw new Error('Please verify your email before logging in.');
    }

    // Get user role from Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.data();

    if (!userData) {
      throw new Error('User data not found');
    }

    // Determine role and redirect
    if (email === SUPER_ADMIN_EMAIL) {
      router.replace('/(super-admin)/dashboard');
    } else if (userData.role === 'admin') {
      router.push({ pathname: '/(admin)' });
    } else if (userData.role === 'worker') {
      router.push({ pathname: '/(worker)' });
    } else {
      throw new Error('Invalid user role');
    }

    return { user, role: userData.role };
  } catch (error: any) {
    switch (error.code) {
      case 'auth/invalid-credential':
      case 'auth/invalid-email':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        throw new Error('Invalid email or password');
      case 'auth/too-many-requests':
        throw new Error('Too many failed attempts. Please try again later');
      case 'auth/user-disabled':
        throw new Error('This account has been disabled');
      default:
        throw new Error('An error occurred during login. Please try again');
    }
  }
};

const authService = {
  signupAdmin,
  signOut,
  resetPassword,
  loginUser
};

export default authService;