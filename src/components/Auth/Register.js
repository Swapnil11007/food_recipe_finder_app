import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import AuthService from '../../services/AuthService';

const Register = () => {
  const navigation = useNavigation(); // Initialize navigation hook
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleRegister = async () => {
    // Check if username or password is empty
    if (!credentials.username || !credentials.password) {
      setError('Username and password are required');
      return;
    }

    try {
      await AuthService.register(credentials);
      navigation.navigate('Login'); // Navigate to Login screen
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.heading}>Register</Text>
      <View style={styles.authForm}>
        <TextInput
          style={styles.input}
          onChangeText={value => handleInputChange('username', value)}
          value={credentials.username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={value => handleInputChange('password', value)}
          value={credentials.password}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  authForm: {
    width: '100%',
  },
  input: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default Register;
