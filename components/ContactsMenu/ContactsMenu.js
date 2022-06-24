import { View, Text, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

const contactMenuButtons = [
  { type: 'starred', name: 'Starred' },
  {
    type: 'contact',
    name: 'Raga Santhosh',
    photo: 'https://avatars.githubusercontent.com/u/44367062?v=4',
  },
  {
    type: 'contact',
    name: 'Pattu',
    photo:
      'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    type: 'contact',
    name: 'Ram',
    photo:
      'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {contactMenuButtons.map((contact, index) => (
        <View style={styles.row} key={index}>
          {/* Image */}
          {contact.type === 'starred' ? (
            <View style={styles.icon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={{ uri: contact.photo }} style={styles.image} />
          )}

          {/* Text */}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContactsMenu;
