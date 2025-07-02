import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const RegisterScreen = () => {
 const navigation = useNavigation<any>();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
  console.log({
    fullName,
    email,
    phone,
    category,
    description,
  });

  // Submit logic yahan lagayein
 navigation.navigate('MainTabs');
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Full  Name"
        placeholderTextColor="#ccc"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone  Number"
        placeholderTextColor="#ccc"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
          dropdownIconColor="#ccc"
        >
          <Picker.Item label="Service  Category" value="" enabled={false} />
          <Picker.Item label="Service Provider" value="provider" />
          <Picker.Item label="Customer" value="customer" />
        </Picker>
      </View>

      <TextInput
        style={styles.textArea}
        placeholder="Description"
        placeholderTextColor="#ccc"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.bottomText}>
          Already have an account? <Text style={{ color: '#fff' }}>Log In</Text>
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    padding: 20,
    justifyContent: 'center',
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
  pickerWrapper: {
    backgroundColor: '#1E2D23',
    borderRadius: 10,
    marginBottom: 15,
  },
  picker: {
    color: '#fff',
    height: Platform.OS === 'ios' ? 150 : 50,
    width: '100%',
  },
  textArea: {
    backgroundColor: '#1E2D23',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    marginBottom: 15,
    height: 100,
    textAlignVertical: 'top',
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
