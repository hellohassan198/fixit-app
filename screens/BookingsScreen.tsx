import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const bookingsData = {
  upcoming: [
    {
      name: 'Ethan Carter',
      service: 'Plumbing',
      time: 'Today, 10:00 AM',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Olivia Bennett',
      service: 'Electrical',
      time: 'Tomorrow, 2:00 PM',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ],
  past: [
    {
      name: 'Noah Thompson',
      service: 'Cleaning',
      time: '2 days ago',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      name: 'Sophia Clark',
      service: 'Handyman',
      time: '1 week ago',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'Liam Walker',
      service: 'Painting',
      time: '2 weeks ago',
      image: 'https://randomuser.me/api/portraits/men/53.jpg',
    },
  ],
};

const BookingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookings</Text>

      <ScrollView>
        <Text style={styles.sectionTitle}>Upcoming</Text>
        {bookingsData.upcoming.map((booking, index) => (
          <View key={index} style={styles.bookingRow}>
            <Image source={{ uri: booking.image }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{booking.name}</Text>
              <Text style={styles.subText}>
                {booking.service} · {booking.time}
              </Text>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Past</Text>
        {bookingsData.past.map((booking, index) => (
          <View key={index} style={styles.bookingRow}>
            <Image source={{ uri: booking.image }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{booking.name}</Text>
              <Text style={styles.subText}>
                {booking.service} · {booking.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bookingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subText: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 2,
  },
});
