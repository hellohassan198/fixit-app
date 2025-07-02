import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignInScreen = () => {
  const navigation = useNavigation<any>();
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('SignIn clicked', { contact, password });

    // ✅ Navigate to Home screen after login
  navigation.navigate('MainTabs');

  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Sign In</Text>

      <TextInput
        placeholder="Phone Number or Email"
        style={styles.input}
        placeholderTextColor="#ccc"
        value={contact}
        onChangeText={setContact}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.bottomText}>
          Don't have an account? <Text style={{ color: '#fff' }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1E2D23',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2CF269',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  bottomText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
  },
});
