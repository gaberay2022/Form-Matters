import 'react-native-gesture-handler'; // Import this at the top of your file
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Start Screen Component
function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Form Matters!</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Sign-Up"
        onPress={() => navigation.navigate('Sign-up')}
      />
    </View>
  );
}

// Login Screen Component
function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

// Sign Up screen Component
function SignupScreen({ navigation }){
  return(
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

// Profile Screen
function ProfileScreen({ navigation }){
  return(
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

//Home Screen
function HomeScreen({ navigation }){
  return(
    <View style={styles.container}>
      <Text>Home Screen Stuff</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sports')}>
        <Text>Sports</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Fitness')}>
        <Text>Fitness</Text>
      </TouchableOpacity>
    </View>
  );
}

//Sport Screen
function SportScreen({ navigation }){
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Baseball')}>
        <Text>Baseball</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Boxing')}>
        <Text>Boxing</Text>
      </TouchableOpacity>
    </View>
  );
}

//Fitness Screen
function FitnessScreen({ navigation }){
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Curls')}>
        <Text>Curls</Text>
      </TouchableOpacity>
    </View>
  );
}

//Curl Screen
function CurlScreen({ navigation }){
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('General Curl')}>
        <Text>General Curls</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Hammer Curl')}>
        <Text>Hammer Curls</Text>
      </TouchableOpacity>
    </View>
  );
}

//Fitness Screen
function CurlGScreen({ navigation }){
  return(
    <View style={styles.container}>
      <Text>General Curls Yay!!!</Text>
      <Button
        title='Upload Video To Test Form'
        onPress={() => navigation.navigate('AI Curl')}
        />
         <Button
        title='Go back to Home Screen'
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}

//Fitness Screen
function HammerCurlScreen({ navigation }){
  return(
    <View style={styles.container}>
      <Text>Hammer Curls</Text>
      <Button
        title='Go back to Home Screen'
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}

//Fitness Screen
function BaseballScreen({ navigation }){
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Swing Bat')}>
        <Text>Swinging a Bat</Text>
      </TouchableOpacity>
    </View>
  );
}

//Fitness Screen
function BoxingScreen({ navigation }){
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Basic Jab')}>
        <Text>Basic Jabs</Text>
      </TouchableOpacity>
    </View>
  );
}

//Fitness Screen
function SwingBatScreen({ navigation }){
  return(
    <View style={styles.container}>
      <Text>SWING BAT</Text>
      <Button
        title='Go back to Home Screen'
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}

//Fitness Screen
function BasicJabScreen({ navigation }){
  return(
    <View style={styles.container}>
      <Text>Punch Good</Text>
      <Button
        title='Upload Video To Test Form'
        onPress={() => navigation.navigate('AI Jab')}
        />
        <Button
        title='Go back to Home Screen'
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}

//AI Curl Screen
function AICurlScreen(){
  return(
    <View style={styles.container}>
      <Text>Upload Vide of Curl</Text>
    </View>
  );
}

//AI Jab Screen
function AIJabScreen(){
  return(
    <View style={styles.container}>
      <Text>Upload Vide of Jab</Text>
    </View>
  );
}

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Hello" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign-up" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Sports" component={SportScreen} />
        <Stack.Screen name="Fitness" component={FitnessScreen} />
        <Stack.Screen name="Curls" component={CurlScreen} />
        <Stack.Screen name="General Curl" component={CurlGScreen} />
        <Stack.Screen name="Hammer Curl" component={HammerCurlScreen} />
        <Stack.Screen name="Baseball" component={BaseballScreen} />
        <Stack.Screen name="Boxing" component={BoxingScreen} />
        <Stack.Screen name="Swing Bat" component={SwingBatScreen} />
        <Stack.Screen name="Basic Jab" component={BasicJabScreen} />
        <Stack.Screen name="AI Jab" component={AIJabScreen} />
        <Stack.Screen name="AI Curl" component={AICurlScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
