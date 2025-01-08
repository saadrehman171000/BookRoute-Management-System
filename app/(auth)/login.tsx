import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { loginUser } from '../services/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      await loginUser(email, password);
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
          <Title style={styles.title}>Login</Title>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            style={styles.input}
            secureTextEntry
          />
          <Button 
            mode="contained" 
            onPress={handleLogin} 
            style={styles.button}
            loading={loading}
            disabled={loading}
          >
            Login
          </Button>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <View style={styles.links}>
            <Link href="/signup">
              <Paragraph>Don't have an account? Sign up</Paragraph>
            </Link>
            <Link href="/forgot-password">
              <Paragraph>Forgot password?</Paragraph>
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
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
  links: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    color: 'red',
    marginTop: 12,
  },
});

export default LoginScreen;