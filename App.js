import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as rnStatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: rnStatusBar.currentHeight,
  },
});
