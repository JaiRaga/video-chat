import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './styles';

const StartMeeting = ({name, roomId, setName, setRoomId, joinRoom}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.info}>
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor={'#888888'}
          style={styles.textInput}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.info}>
        <TextInput
          placeholder="Enter Room Name or Id"
          placeholderTextColor={'#888888'}
          style={styles.textInput}
          value={roomId}
          onChangeText={setRoomId}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => joinRoom()} style={styles.meetingBtn}>
          <Text style={styles.meetingBtnText}>Start Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartMeeting;
