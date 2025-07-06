import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const ProviderProfileScreen = () => {
  const provider = {
    name: 'Hamza Ali',
    email: 'hamza.provider@example.com',
    phone: '+92 300 1234567',
    avatar: 'https://i.pravatar.cc/150?img=12',
    specialty: 'Electrical & Plumbing Services',
  };

  const handleEdit = () => {
    Alert.alert('Edit Profile', 'Edit functionality coming soon...');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
    // You can use navigation.reset here to go to SignIn screen
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: provider.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{provider.name}</Text>
      <Text style={styles.specialty}>{provider.specialty}</Text>

      <Text style={styles.infoLabel}>Email</Text>
      <Text style={styles.info}>{provider.email}</Text>

      <Text style={styles.infoLabel}>Phone</Text>
      <Text style={styles.info}>{provider.phone}</Text>

      <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProviderProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#2CF269',
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  specialty: {
    color: '#2CF269',
    marginBottom: 20,
  },
  infoLabel: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 20,
  },
  info: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#2CF269',
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '80%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});
