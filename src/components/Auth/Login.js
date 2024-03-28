import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import AuthService from '../../services/AuthService';

const Login = () => {
  const navigation = useNavigation(); // Initialize navigation hook
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    try {
      await AuthService.login(credentials);
      navigation.navigate('Dashboard'); // Navigate to Dashboard screen
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async () => {
    navigation.navigate('Register')
  };


  return (
    <View style={styles.authContainer}>
      <Text style={styles.heading}>Login</Text>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 5 }}>Don't have an account?</Text>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

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
  registerButton: {
    color: 'blue',
    backgroundColor: 'transparent',
    // borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'blue',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
