import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReviewsScreen = () => {
  const navigation = useNavigation();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log('Submitted:', {
      rating: selectedRating,
      feedback,
    });
    // Submit logic here
  };

  const renderRatingButtons = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <TouchableOpacity
        key={star}
        style={[
          styles.ratingButton,
          selectedRating === star && styles.ratingButtonSelected,
        ]}
        onPress={() => setSelectedRating(star)}
      >
        <Text style={styles.ratingButtonText}>{star} star{star > 1 ? 's' : ''}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      {/* Close icon */}
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Rate your experience</Text>

      {/* Avatar and name */}
      <Image
        source={{
          uri: 'https://i.pravatar.cc/150?img=32', // 👈 Replace with actual user avatar
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Ethan Carter</Text>
      <Text style={styles.subText}>Plumber</Text>

      <Text style={styles.question}>How was your experience?</Text>

      {/* Rating options */}
      <View style={styles.ratingContainer}>{renderRatingButtons()}</View>

      {/* Textarea */}
      <TextInput
        style={styles.textArea}
        placeholder="Write your feedback..."
        placeholderTextColor="#999"
        multiline
        numberOfLines={4}
        value={feedback}
        onChangeText={setFeedback}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1912',
    padding: 20,
  },
  closeIcon: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subText: {
    color: '#ccc',
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: 20,
  },
  question: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    gap: 10,
  },
  ratingButton: {
    borderColor: '#2CF269',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  ratingButtonSelected: {
    backgroundColor: '#2CF269',
  },
  ratingButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  textArea: {
    backgroundColor: '#1E2D23',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#96ECB1',
    padding: 12,
    borderRadius: 10,
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },
  submitText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
