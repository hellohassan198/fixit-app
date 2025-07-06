import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';

const ProviderBookingsScreen = () => {
  const [activeTab, setActiveTab] = useState<'new' | 'scheduled' | 'upcoming'>('new');

  const jobs = {
    new: [
      {
        id: '1',
        title: 'Plumbing Repair',
        address: '123 Elm Street, Anytown',
        image: 'https://cdn-icons-png.flaticon.com/512/3061/3061080.png',
      },
      {
        id: '2',
        title: 'Electrical Wiring',
        address: '456 Oak Avenue, Anytown',
        image: 'https://cdn-icons-png.flaticon.com/512/943/943593.png',
      },
      {
        id: '3',
        title: 'Appliance Repair',
        address: '789 Pine Lane, Anytown',
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
      },
    ],
    scheduled: [
      {
        id: '4',
        title: 'Pipe Fixing',
        address: '22 Lakeview Blvd, Anytown',
        image: 'https://cdn-icons-png.flaticon.com/512/3176/3176297.png',
      },
      {
        id: '5',
        title: 'Switch Installation',
        address: '11 Hill Road, Anytown',
        image: 'https://cdn-icons-png.flaticon.com/512/690/690956.png',
      },
    ],
    upcoming: [
      {
        id: '6',
        title: 'Washing Machine Setup',
        address: '99 Green Street, Anytown',
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046858.png',
      },
      {
        id: '7',
        title: 'HVAC Maintenance',
        address: '88 Forest Ave, Anytown',
        image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
      },
    ],
  };

  const renderCard = ({ item }: any) => (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.newLabel}>New</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <TouchableOpacity style={styles.viewBtn}>
          <Text style={styles.viewBtnText}>View</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabs}>
        {['new', 'scheduled', 'upcoming'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab as any)}
            style={styles.tabBtn}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab === 'new'
                ? 'New Requests'
                : tab === 'scheduled'
                ? 'Scheduled'
                : 'Upcoming'}
            </Text>
            {activeTab === tab && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Search Input */}
      <TextInput
        placeholder="Search  requests"
        placeholderTextColor="#ccc"
        style={styles.searchBox}
      />

      {/* Job List */}
      <FlatList
        data={jobs[activeTab]}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default ProviderBookingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tabBtn: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#ccc',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  underline: {
    height: 2,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 4,
    borderRadius: 10,
  },
  searchBox: {
    backgroundColor: '#1E2D23',
    borderRadius: 10,
    color: '#fff',
    paddingHorizontal: 15,
    height: 45,
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E2D23',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  newLabel: {
    color: '#2CF269',
    fontSize: 12,
    marginBottom: 5,
  },
  title: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  address: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 8,
  },
  viewBtn: {
    backgroundColor: '#2CF269',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  viewBtnText: {
    fontWeight: 'bold',
    color: '#0B1912',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginLeft: 10,
  },
});
