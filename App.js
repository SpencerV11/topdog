import { GyroscopeLogic } from './components/Gyroscope';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundTask from './components/BackgroundTask';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <GyroscopeLogic/> */}
      <BackgroundTask
        interval={1000}
        function={() => {
          console.log("My task " + Math.random())
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
