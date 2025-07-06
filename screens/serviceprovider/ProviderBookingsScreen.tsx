import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const todayBookings = [
  {
    id: '1',
    title: 'Plumbing Repair',
    customer: 'Ethan Carter',
    time: '10:00 AM',
    image:
      'https://cdn-icons-png.flaticon.com/512/2933/2933887.png',
    status: 'New',
  },
  {
    id: '2',
    title: 'Electrical Wiring',
    customer: 'Olivia Bennett',
    time: '2:00 PM',
    image:
      'https://cdn-icons-png.flaticon.com/512/1809/1809294.png',
    status: 'New',
  },
];

const upcomingBookings = [
  {
    id: '3',
    title: 'Appliance Repair',
    customer: 'Noah Thompson',
    time: 'Tomorrow, 9:00 AM',
    image:
      'https://cdn-icons-png.flaticon.com/512/1046/1046750.png',
    status: '',
  },
  {
    id: '4',
    title: 'HVAC Maintenance',
    customer: 'Sophia Clark',
    time: '2 days, 11:00 AM',
    image:
      'https://cdn-icons-png.flaticon.com/512/1531/1531107.png',
    status: '',
  },
];

const ProviderBookingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bookings</Text>

      {/* Today */}
      <Text style={styles.sectionTitle}>Today</Text>
      {todayBookings.map(item => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.status}>{item.status}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subText}>
              Customer: {item.customer} · {item.time}
            </Text>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptText}>Accept</Text>
              <Ionicons name="checkmark" color="#fff" size={16} />
            </TouchableOpacity>
          </View>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      ))}

      {/* Upcoming */}
      <Text style={styles.sectionTitle}>Upcoming</Text>
      {upcomingBookings.map(item => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subText}>
              Customer: {item.customer} · {item.time}
            </Text>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewText}>View</Text>
              <Ionicons name="arrow-forward" color="#fff" size={16} />
            </TouchableOpacity>
          </View>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

export default ProviderBookingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    padding: 16,
  },
  header: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#122C1F',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  cardInfo: {
    flex: 1,
    marginRight: 10,
  },
  status: {
    color: '#2CF269',
    fontSize: 12,
    marginBottom: 4,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subText: {
    color: '#aaa',
    marginTop: 4,
    marginBottom: 10,
  },
  acceptButton: {
    backgroundColor: '#2CF269',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  acceptText: {
    color: '#000',
    marginRight: 4,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: '#2CF269',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  viewText: {
    color: '#000',
    marginRight: 4,
    fontWeight: 'bold',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});
