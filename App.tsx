import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Auth Screens
import SignInScreen from './screens/auth/SignInScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

// Customer Screens
import HomeScreen from './screens/customer/HomeScreen';
import DashboardScreen from './screens/customer/DashboardScreen';
import ProviderDetailsScreen from './screens/customer/ProviderDetailsScreen';
import BookingConfirmationScreen from './screens/customer/BookingConfirmationScreen';
import BookingsScreen from './screens/customer/BookingsScreen';
import ReviewsScreen from './screens/customer/ReviewsScreen';
import ProfileScreen from './screens/customer/ProfileScreen';

// Service Provider Screens
import ServiceProviderHomeScreen from './screens/serviceprovider/ServiceProviderHomeScreen';
import ProviderBookingsScreen from './screens/serviceprovider/ProviderBookingsScreen';
import JobStatusScreen from './screens/serviceprovider/JobStatusScreen';
import ProviderProfileScreen from './screens/serviceprovider/ProviderProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomerTabs = () => (
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

// 👉 You will connect this next
const ServiceProviderTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: { backgroundColor: '#0B1912' },
      tabBarIcon: ({ color, size }) => {
        let iconName = '';
        if (route.name === 'JobRequests') iconName = 'home';
        else if (route.name === 'Bookings') iconName = 'calendar-outline';
        else if (route.name === 'JobStatus') iconName = 'construct-outline';
        else if (route.name === 'Profile') iconName = 'person-outline';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2CF269',
      tabBarInactiveTintColor: '#ccc',
    })}
  >
    <Tab.Screen name="JobRequests" component={ServiceProviderHomeScreen} />
    <Tab.Screen name="Bookings" component={ProviderBookingsScreen} />
    <Tab.Screen name="JobStatus" component={JobStatusScreen} />
    <Tab.Screen name="Profile" component={ProviderProfileScreen} />



    {/* Add more tabs here later like: Bookings, JobStatus, etc */}
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        {/* Flows */}
        <Stack.Screen name="MainTabs" component={CustomerTabs} />
        <Stack.Screen name="ServiceProviderTabs" component={ServiceProviderTabs} />

        {/* Extra Screens */}
        <Stack.Screen name="ProviderDetails" component={ProviderDetailsScreen} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
