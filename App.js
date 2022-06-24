import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as rnStatusBar } from 'react-native';
import Navigator from './navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar backgroundColor='#1e1e1e' style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: rnStatusBar.currentHeight,
  },
});
