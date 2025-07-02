import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProviderDetailsScreen from './screens/ProviderDetailsScreen';
import BookingConfirmationScreen from './screens/BookingConfirmationScreen';
import BookingsScreen from './screens/BookingsScreen';
import ReviewsScreen from './screens/ReviewsScreen'; // ✅ Your actual review form screen

// ❗ Placeholder for Profile
const ProfileScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#0B1912', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: '#fff', fontSize: 18 }}>Profile Screen (Coming Soon)</Text>
  </View>
);

// Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ✅ Bottom Tab Navigator
const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: { backgroundColor: '#0B1912' },
      tabBarIcon: ({ color, size }) => {
        let iconName = '';
        if (route.name === 'Home') iconName = 'home';
        else if (route.name === 'Dashboard') iconName = 'calendar-outline';
        else if (route.name === 'Bookings') iconName = 'briefcase-outline';
        else if (route.name === 'Reviews') iconName = 'star-outline';
        else if (route.name === 'Profile') iconName = 'person-outline';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2CF269',
      tabBarInactiveTintColor: '#ccc',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Bookings" component={BookingsScreen} />
    <Tab.Screen name="Reviews" component={ReviewsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

// ✅ Main App Entry
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Authentication Flow */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        {/* Main Tabs */}
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />

        {/* Other Screens */}
        <Stack.Screen name="ProviderDetails" component={ProviderDetailsScreen} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
