import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Link } from 'expo-router';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Implement password reset logic here
    console.log('Password reset requested for:', email);
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
          <Button mode="contained" onPress={handleResetPassword} style={styles.button}>
            Reset Password
          </Button>
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
});

export default ForgotPasswordScreen;