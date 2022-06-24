import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import MenuButtons from '../components/MenuButtons';
import ContactsMenu from '../components/ContactsMenu';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Searchbar />
      <MenuButtons />
      <ContactsMenu />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 5
  }
});
