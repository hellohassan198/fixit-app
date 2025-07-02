import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BookingConfirmationScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Booking Confirmed</Text>

      <Text style={styles.subtitle}>Your booking is confirmed!</Text>
      <Text style={styles.note}>
        You'll receive a notification when the service provider is on their way.
      </Text>

      <View style={styles.profileRow}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Alex Johnson</Text>
          <Text style={styles.service}>Plumbing</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="calendar-today" size={24} color="#2CF269" />
        <View style={styles.infoText}>
          <Text style={styles.label}>Date & Time</Text>
          <Text style={styles.value}>July 20, 2024, 2:00 PM</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="location-outline" size={24} color="#2CF269" />
        <View style={styles.infoText}>
          <Text style={styles.label}>Service Address</Text>
          <Text style={styles.value}>123 Elm Street, Anytown, USA</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => {
          // Future: Navigate to full booking detail screen
        }}
      >
        <Text style={styles.primaryText}>View Booking Details</Text>
      </TouchableOpacity>

    <TouchableOpacity
  style={styles.secondaryButton}
  onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}
>
  <Text style={styles.secondaryText}>Back to Home</Text>
</TouchableOpacity>

    </View>
  );
};

export default BookingConfirmationScreen;

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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#2CF269',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
  note: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    gap: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  service: {
    color: '#aaa',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 15,
  },
  label: {
    color: '#2CF269',
    fontWeight: 'bold',
  },
  value: {
    color: '#ccc',
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: '#2CF269',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  primaryText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#1E2D23',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  secondaryText: {
    color: '#fff',
    fontSize: 16,
  },
});
