import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

const items = [
  { id: 1, name: 'video-camera', title: 'New Meeting', customColor: '#54BAB9' },
  { id: 2, name: 'plus-square', title: 'Join', customColor: '' },
  { id: 3, name: 'calendar', title: 'Schedule', customColor: '' },
  { id: 4, name: 'upload', title: 'Share Screen', customColor: '' },
];

const MenuButtons = () => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View style={styles.buttonContainer} key={index}>
          <TouchableOpacity
            style={{
              ...styles.menuBtn,
              backgroundColor: item.customColor ? item.customColor : '#3B44F6',
            }}
          >
            <FontAwesome name={item.name} size={24} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.menuBtnText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;
