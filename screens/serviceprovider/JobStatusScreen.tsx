import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const statuses = [
  'Scheduled',
  'On the Way',
  'In Progress',
  'Completed',
  'Issue Reported',
];

const JobStatusScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedStatus, setSelectedStatus] = useState('Scheduled');

  const handleSave = () => {
    console.log('Saved Status:', selectedStatus);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.header}>Job Status</Text>

      {/* Job Details */}
      <Text style={styles.subHeader}>Job Details</Text>
      <View style={styles.detailRow}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2933/2933887.png',
          }}
          style={styles.icon}
        />
        <View>
          <Text style={styles.detailTitle}>Plumbing Repair</Text>
          <Text style={styles.detailText}>123 Main St, Anytown</Text>
        </View>
      </View>

      <View style={styles.detailRow}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/747/747310.png',
          }}
          style={styles.icon}
        />
        <View>
          <Text style={styles.detailTitle}>Appointment Time</Text>
          <Text style={styles.detailText}>Scheduled for 2:00 PM</Text>
        </View>
      </View>

      {/* Update Status */}
      <Text style={styles.subHeader}>Update Status</Text>
      {statuses.map(status => (
        <TouchableOpacity
          key={status}
          style={[
            styles.statusOption,
            selectedStatus === status && styles.statusSelected,
          ]}
          onPress={() => setSelectedStatus(status)}
        >
          <Text
            style={[
              styles.statusText,
              selectedStatus === status && styles.statusTextSelected,
            ]}
          >
            {status}
          </Text>
          {selectedStatus === status && (
            <Ionicons name="checkmark-circle" size={22} color="#2CF269" />
          )}
        </TouchableOpacity>
      ))}

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default JobStatusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    padding: 16,
  },
  backButton: {
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#122C1F',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  detailTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  detailText: {
    color: '#ccc',
    marginTop: 2,
  },
  statusOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#122C1F',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  statusText: {
    color: '#ccc',
    fontSize: 16,
  },
  statusSelected: {
    borderWidth: 1,
    borderColor: '#2CF269',
  },
  statusTextSelected: {
    color: '#2CF269',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#2CF269',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  saveText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
