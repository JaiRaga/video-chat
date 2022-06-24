import { View, Text } from 'react-native';
import React from 'react';
import { Fontisto } from '@expo/vector-icons';

import styles from './styles';

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#858585" />
      <Text style={styles.searchBarText}>Search</Text>
    </View>
  );
};

export default Searchbar;
