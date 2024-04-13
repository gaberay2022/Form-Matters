import 'react-native-gesture-handler';
import React, {useState, useEffect } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import * as tf from '@tensorflow/tfjs';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import '@tensorflow/tfjs-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

//ai modle
const initTensorFlow = async () => {
  await tf.ready();
}
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
      <Text>How to do a bicep curl(single)</Text>
      <Text>Steps/Guide:</Text>
      <Text>1.	Stand tall with your feet hip-width apart, engaging your core muscles for stability.</Text>
      <Text>2.	Hold a dumbbell in one hand, allowing your arm to relax down at the side of your body with the palm facing forward.</Text>
      <Text>3.	Keep your upper arm stable and shoulder relaxed. Bend at the elbow and lift the weight towards your shoulder, ensuring your elbow stays close to your body.</Text>
      <Text>4.	Exhale as you lift the weight.</Text>
      <Text>5.	Lower the weight back to the starting position.</Text>
      <Text>6.	Perform the desired number of repetitions, maintaining control and focusing on proper form throughout the movement.</Text>
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
      <Text>How to get a good swing in</Text>
            <Text>Steps/Guide:</Text>
            <Text>1.	Stance: Begin with a shoulder-width stance, knees slightly bent, weight evenly distributed.</Text>
            <Text>2.	Grip: Hold the bat firmly but not too tight, with your dominant hand at the bottom (closer to the knob).</Text>
            <Text>3.	Ready Position: Keep the bat parallel to the ground at shoulder height, elbows relaxed and bent.</Text>
            <Text>4.	Load: Shift weight back onto your back leg, raising the bat slightly behind your rear shoulder.</Text>
            <Text>5.	Stride: Take a small, balanced step forward with your front foot.</Text>
            <Text>6.	Rotation: Initiate hip and torso rotation toward the pitcher, transferring weight to your front foot.</Text>
            <Text>7.	Hands to the Ball: Bring the bat through the hitting zone, aiming for middle contact.</Text>
            <Text>8.	Contact: Keep eyes on the ball, making contact slightly in front of the plate with head down.</Text>
            <Text>9.	Follow Through: Continue the swing motion fully, allowing the bat to extend and body to rotate.</Text>
            <Text>10.	Finish: Complete the swing with balanced weight on your front foot and body in an athletic position.</Text>
      <YoutubePlayer
        height={300}
        width={400}
        play={true}
        videoId={"lX_dm39fkfw"}
        initialPlayerParams={{ mute: true, controls: true, loop: true, rel: false, autoplay: true }}
      />
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
      <Text>How to throw a proper jab</Text>
      <Text>Steps/Guide:</Text>
      <Text>1.	Stance: Start in a balanced stance with your feet shoulder-width apart, one foot slightly ahead of the other.</Text>
      <Text>2.	Guard: Keep your hands up, with your lead hand (left for orthodox stance, right for southpaw stance) positioned near your face to protect it.</Text>
      <Text>3.	Jab Setup: Use your rear hand to set up the jab by slightly turning your shoulder inward.</Text>
      <Text>4.	Extension: Extend your lead hand (jabbing hand) forward quickly and forcefully, aiming for your target.</Text>
      <Text>5.	Rotation: Rotate your lead shoulder slightly outward as you extend your arm to add power to the jab.</Text>
      <Text>6.	Recoil: After landing the jab, quickly retract your lead hand back to your guard position to protect yourself.</Text>
      <Text>7.	Footwork: Pivot on the ball of your back foot slightly as you jab to generate power and maintain balance.</Text>
      <Text>8.	Breathing: Exhale sharply as you extend your arm forward to maximize power and control.</Text>

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
function AIJabScreen({ navigation }) {
  const [model, setModel] = useState(null);
  const [video, setVideo] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

  const loadModel = async () => {
    try {
      const model = await tf.loadLayersModel('FormMatters/AI Models/model.json');
      setModel(model);
      console.log('Model loaded successfully');
    } catch (error) {
      console.error('Error loading model: ', error);
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      setVideo(result.uri);
      console.log('Video picked:', result.uri);
      uploadVideo(result.uri);
    }
  };

  const uploadVideo = async (videoUri) => {
    const formData = new FormData();
    formData.append('video', {
      uri: videoUri,
      type: 'video/mp4',  // adjust based on actual video type
      name: 'upload.mp4'
    });

    try {
      const response = await axios.post('http://your-server-ip:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResults(response.data.frames);  // assuming the server sends back the paths or analysis results
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Upload Video of Jab</Text>
      <Button title="Load Model" onPress={loadModel} />
      <Button title="Pick a Video" onPress={pickVideo} />
      {results && <Text>Results: {JSON.stringify(results)}</Text>}
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
