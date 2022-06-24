import { View, Text } from 'react-native';
import React from 'react';
import {Entypo} from "@expo/vector-icons"

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo name="notification" size={30} color="#efefef" />
      <Text style={styles.header}>Meet & Chat</Text>
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  );
};

export default Header;
