import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const MeetingsScreen = () => {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  return (
    <View style={styles.container}>
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
          <TouchableOpacity onPress={() => {}} style={styles.meetingBtn}>
            <Text style={styles.meetingBtnText}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MeetingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  inputContainer: {},
  info: {
    width: '100%',
    height: 50,
    backgroundColor: '#414144',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#646464',
    padding: 12,
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 18,
  },
  btnContainer: {
    alignItems: 'center',
  },
  meetingBtn: {
    width: 350,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2155CD',
    height: 50,
    borderRadius: 25,
  },
  meetingBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
