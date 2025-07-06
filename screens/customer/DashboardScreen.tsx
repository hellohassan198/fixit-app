import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const jobs = {
  requests: [
    {
      name: 'Sophia Clark',
      role: 'Plumbing · Today, 2:00 PM',
      avatar: 'https://i.pravatar.cc/150?img=15',
      button: 'Accept',
    },
    {
      name: 'Ethan Carter',
      role: 'Electrical · Tomorrow, 10:00 AM',
      avatar: 'https://i.pravatar.cc/150?img=18',
      button: 'Accept',
    },
  ],
  upcoming: [
    {
      name: 'Olivia Bennett',
      role: 'Cleaning · July 15, 9:00 AM',
      avatar: 'https://i.pravatar.cc/150?img=21',
      button: 'Update',
    },
    {
      name: 'Noah Thompson',
      role: 'Handyman · July 16, 1:00 PM',
      avatar: 'https://i.pravatar.cc/150?img=23',
      button: 'Update',
    },
  ],
  completed: [
    {
      name: 'Ava Harper',
      role: 'Painting · July 10',
      amount: '$150',
      avatar: 'https://i.pravatar.cc/150?img=25',
    },
    {
      name: 'Liam Foster',
      role: 'Gardening · July 11',
      amount: '$80',
      avatar: 'https://i.pravatar.cc/150?img=26',
    },
  ],
};

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
      </View>

      <ScrollView style={styles.scrollArea}>
        {/* New Requests */}
        <Text style={styles.sectionTitle}>New Requests</Text>
        {jobs.requests.map((item, index) => (
          <View style={styles.row} key={index}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallBtnText}>{item.button}</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Upcoming Jobs */}
        <Text style={styles.sectionTitle}>Upcoming Jobs</Text>
        {jobs.upcoming.map((item, index) => (
          <View style={styles.row} key={index}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallBtnText}>{item.button}</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Completed Jobs */}
        <Text style={styles.sectionTitle}>Completed Jobs</Text>
        {jobs.completed.map((item, index) => (
          <View style={styles.row} key={index}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollArea: {
    marginBottom: 80,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121E16',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
  },
  role: {
    color: '#ccc',
    fontSize: 12,
  },
  smallBtn: {
    backgroundColor: '#2CF269',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  smallBtnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  amount: {
    color: '#2CF269',
    fontWeight: 'bold',
  },
});
