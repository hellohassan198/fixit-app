import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProviderDetailsScreen = () => {
const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Service Provider Details</Text>

      <View style={styles.centered}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
  style={styles.avatar}
        />
        <Text style={styles.name}>Alex Johnson</Text>
        <Text style={styles.subtitle}>Plumbing Services</Text>
        <Text style={styles.subtitle}>Verified Provider</Text>
      </View>

      <View style={styles.ratingBox}>
        <Text style={styles.rating}>4.8</Text>
        <View>
          <View style={styles.starsRow}>
            <Ionicons name="star" color="#2CF269" size={16} />
            <Ionicons name="star" color="#2CF269" size={16} />
            <Ionicons name="star" color="#2CF269" size={16} />
            <Ionicons name="star" color="#2CF269" size={16} />
            <Ionicons name="star-outline" color="#2CF269" size={16} />
          </View>
          <Text style={styles.reviewCount}>125 reviews</Text>
        </View>
      </View>

      <View style={styles.barChart}>
        {[5, 4, 3, 2, 1].map((star, i) => (
          <View key={i} style={styles.barRow}>
            <Text style={styles.starText}>{star}</Text>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, { width: `${[70, 20, 5, 3, 2][i]}%` }]} />
            </View>
            <Text style={styles.percentText}>{[70, 20, 5, 3, 2][i]}%</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Alex</Text>
        <Text style={styles.paragraph}>
          Alex Johnson is a certified plumber with over 10 years of experience in residential and
          commercial plumbing. Specializing in leak detection, pipe repairs, and fixture
          installations. Committed to providing reliable and efficient service.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reviews</Text>

        {/* Review 1 */}
        <View style={styles.reviewItem}>
          <View style={styles.reviewHeader}>
            <Image
             source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
  style={styles.reviewAvatar}
            />
            <View>
              <Text style={styles.reviewerName}>Sophia Clark</Text>
              <Text style={styles.reviewTime}>2 weeks ago</Text>
            </View>
          </View>
          <View style={styles.starsRow}>
            {Array(5).fill(null).map((_, i) => (
              <Ionicons key={i} name="star" color="#2CF269" size={16} />
            ))}
          </View>
          <Text style={styles.paragraph}>
            Alex was incredibly professional and fixed our leaky faucet in no time. Highly
            recommend!
          </Text>
          <View style={styles.feedbackRow}>
            <MaterialIcons name="thumb-up-off-alt" size={18} color="#ccc" />
            <Text style={styles.feedbackText}>5</Text>
            <MaterialIcons name="chat-bubble-outline" size={18} color="#ccc" style={{ marginLeft: 10 }} />
            <Text style={styles.feedbackText}>1</Text>
          </View>
        </View>

        {/* Review 2 */}
        <View style={styles.reviewItem}>
          <View style={styles.reviewHeader}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=8' }}
  style={styles.reviewAvatar}
            />
            <View>
              <Text style={styles.reviewerName}>Ethan Miller</Text>
              <Text style={styles.reviewTime}>1 month ago</Text>
            </View>
          </View>
          <View style={styles.starsRow}>
            {Array(4).fill(null).map((_, i) => (
              <Ionicons key={i} name="star" color="#2CF269" size={16} />
            ))}
            <Ionicons name="star-outline" color="#2CF269" size={16} />
          </View>
          <Text style={styles.paragraph}>
            Alex did a good job installing our new toilet, but was a bit late to the appointment.
          </Text>
          <View style={styles.feedbackRow}>
            <MaterialIcons name="thumb-up-off-alt" size={18} color="#ccc" />
            <Text style={styles.feedbackText}>2</Text>
            <MaterialIcons name="chat-bubble-outline" size={18} color="#ccc" style={{ marginLeft: 10 }} />
            <Text style={styles.feedbackText}>0</Text>
          </View>
        </View>
      </View>

     <TouchableOpacity
  style={styles.bookButton}
  onPress={() => navigation.navigate('BookingConfirmation')}
>
  <Text style={styles.bookButtonText}>Book Now</Text>
</TouchableOpacity>
    </ScrollView>
  );
};

export default ProviderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    alignSelf: 'center',
  },
  centered: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2CF269',
    marginRight: 20,
  },
  starsRow: {
    flexDirection: 'row',
  },
  reviewCount: {
    color: '#ccc',
    fontSize: 12,
  },
  barChart: {
    marginBottom: 20,
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  barTrack: {
    height: 6,
    backgroundColor: '#1E2D23',
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 3,
  },
  barFill: {
    height: 6,
    backgroundColor: '#2CF269',
    borderRadius: 3,
  },
  starText: {
    color: '#fff',
    width: 16,
    textAlign: 'center',
  },
  percentText: {
    color: '#ccc',
    width: 40,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
  },
  reviewItem: {
    marginBottom: 20,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  reviewAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  reviewerName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  reviewTime: {
    color: '#999',
    fontSize: 12,
  },
  feedbackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  feedbackText: {
    color: '#ccc',
    marginLeft: 4,
  },
  bookButton: {
    backgroundColor: '#2CF269',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  bookButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
