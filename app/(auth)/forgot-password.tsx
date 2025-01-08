import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Link } from 'expo-router';
import { resetPassword } from '../services/auth';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      setError('');
      await resetPassword(email);
      setSuccess(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Forgot Password</Title>
          <Paragraph style={styles.description}>
            Enter your email address and we'll send you instructions to reset your password.
          </Paragraph>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
            keyboardType="email-address"
          />
          <Button 
            mode="contained" 
            onPress={handleResetPassword} 
            style={styles.button}
            loading={loading}
            disabled={loading}
          >
            Reset Password
          </Button>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          {success ? (
            <Text style={styles.success}>
              Password reset email sent! Check your inbox.
            </Text>
          ) : null}
          <View style={styles.links}>
            <Link href="/login">
              <Paragraph>Back to Login</Paragraph>
            </Link>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    elevation: 4,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
  links: {
    marginTop: 16,
    alignItems: 'center',
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
  success: {
    color: 'green',
    marginTop: 8,
  },
});

export default ForgotPasswordScreen;