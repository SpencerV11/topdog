import { GyroscopeLogic } from './components/Gyroscope';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundTask from './components/BackgroundTask';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <GyroscopeLogic/> */}
      <BackgroundTask />
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
