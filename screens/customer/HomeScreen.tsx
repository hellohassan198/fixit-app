import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const services = [
  { icon: 'hammer', label: 'Handyman' },
  { icon: 'home-outline', label: 'Cleaning' },
  { icon: 'flash-outline', label: 'Electrician' },
  { icon: 'wrench-outline', label: 'Plumber' },
  { icon: 'brush', label: 'Painter' },
  { icon: 'tree-outline', label: 'Gardener' },
];

const HomeScreen = () => {
const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FixIt</Text>
        <Ionicons name="search-outline" size={24} color="#fff" />
      </View>

      {/* Search bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#aaa" />
        <TextInput
          placeholder="Search  for services"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
      </View>

      {/* Popular Services */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Popular Services</Text>

        <View style={styles.servicesGrid}>
          {services.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceBtn}
              onPress={() => navigation.navigate('ProviderDetails')}
            >
              <MaterialCommunityIcons name={item.icon} size={20} color="#fff" />
              <Text style={styles.serviceText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2D23',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
    marginBottom: 25,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceBtn: {
    backgroundColor: '#0B1912',
    borderWidth: 1,
    borderColor: '#2CF269',
    borderRadius: 10,
    width: '47%',
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  serviceText: {
    color: '#fff',
    marginTop: 5,
  },
  scrollContainer: {
    paddingBottom: 120,
  },
});
